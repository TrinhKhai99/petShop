import axios from 'axios';
import user from '../assets/apis/user';

    // Xử Lý User
    // Lấy tất cả user
export const getUsers = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/user?page=${data.page}`)
        .then(respose => {
            commit('SET_USERS', respose.data);

        })
}

export const getStatistical = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/petstatus?page=${data.page}&maxItem=8`)
        .then(respose => {
            commit('SET_STATISTICAL', respose.data);

        })
}

export const addUsers = ({ commit, dispatch }, user,) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.post('https://petadoption.j.layershift.co.uk/admin/user/', user, config)
        .then(respose => {
            commit('ADD_USER', respose.data)
            dispatch("addNote", {
                type: 'success',
                message: 'Thêm Người Dùng thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/user/')
             .then(respose => {
            commit('SET_USERS', respose.data);
        })
        })
        .catch((error) => {
            if(error.response.status == 400) {
                dispatch("addNote", {
                    type: 'danger',
                    message: 'Vui Lòng Nhập Đủ'
                })
            }
        })
}

export const addPetStatusEntry = ({ commit, dispatch }, data,) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    axios.post('https://petadoption.j.layershift.co.uk/admin/petstatus/', data.pet, config)
        .then(respose => {
            // commit('ADD_USER', respose.data)
            dispatch("addNote", {
                type: 'success',
                message: 'Cập Nhật Trạng Thái thành công'
            })
            axios.get(`https://petadoption.j.layershift.co.uk/admin/pet/${data.id}/petstatus`)
        .then(respose => {
            commit('SET_PET_STATUS_ENTRY', respose.data );
        })
        })
        .catch((error) => {
            if(error.response.status == 400) {
                dispatch("addNote", {
                    type: 'danger',
                    message: 'Vui Lòng Nhập Đủ'
                })
            }
        })
}

    // Lấy User Theo Id
export const getUser = ({ commit }, UserId) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/user/${UserId}`)
        .then(respose => {
            commit('SET_USER', respose.data);
        })
}
    // Thay đổi quyền user
export const changeRole = ({ commit, dispatch }, userRole) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/user/role', userRole, config)
        .then(respose => {
            commit('CHANGE_ROLE', respose.data)
            dispatch("addNote", {
                type: 'success',
                message: 'Đổi quyền hạn thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/user')
            .then(respose => {
            commit('SET_USERS', respose.data);
        })
        })
        .catch((err) => {
            if(err.response.status === 403) {
                dispatch("addNote", {
                    type: 'danger',
                    message: 'Bạn không có quyền làm điều này'
                })
            }
        })
        
}
// Đăng Nhập
export const login = ({ commit }, user) => {
    return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'https://petadoption.j.layershift.co.uk/login', data: user, method: 'POST' })
            .then(resp => {
                const dataLogin = {
                    token: resp.data,
                    user: JSON.parse(resp.config.data),
                    isLogin: true
                }
                localStorage.setItem('isLogin', dataLogin.isLogin)
                localStorage.setItem('token', dataLogin.token)
                axios.defaults.headers.common['Authorization'] = dataLogin.token
                commit('auth_success', dataLogin)
                resolve(resp)
            })
            .catch(err => {
                commit('auth_error')
                localStorage.removeItem('token')
                reject(err)
            })
    })
}
// Lấy người dùng hiện tại
export const getUserLogin = ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
        const token = localStorage.getItem('token')
        axios({ url: 'https://petadoption.j.layershift.co.uk/user', data: token, method: 'GET' })
            .then(respose => {
                const infoUserLogin = {
                    userLogin: respose.data,
                    role: respose.data.roleDTO.role_name
                }
                localStorage.setItem('role_name', infoUserLogin.role)
                localStorage.setItem('userLogin', JSON.stringify(infoUserLogin.userLogin))
                commit('get_userLogin', infoUserLogin)
                dispatch("addNote", {
                    type: 'success',
                    message: `Chào mừng ${infoUserLogin.userLogin.userName}`
                })
            })

        resolve()
    })
}

export const logout = ({ commit }) => {
    return new Promise((resolve, reject) => {
        const status = false
        commit('logout', status)
        localStorage.removeItem('token')
        localStorage.removeItem('role_name')
        localStorage.removeItem('userLogin')
        localStorage.setItem('isLogin', status)
        delete axios.defaults.headers.common['Authorization']
        resolve()
    })
}
    // Kết thúc xử lý user
    // Xử Lý Tin Tức
export const getNews = ({ commit }, resultSearch) => {
    let data = []
    axios.get(`https://petadoption.j.layershift.co.uk/admin/news?pojo.title=${resultSearch.search}&pojo.newsCategoryDTO.newsCategoryId=${resultSearch.category}&maxItem=${resultSearch.record}&page=${resultSearch.page}`)
        .then(respose => {
            commit('SET_NEWS', data = {
                news: respose.data,
                search: resultSearch.search,
                category: resultSearch.category,
                record: resultSearch.record,
                page: resultSearch.page
            }
            );

        })
}


export const getNewsCate = ({ commit }) => {
    axios.get('https://petadoption.j.layershift.co.uk/admin/newscategory/')
        .then(respose => {
            commit('SET_NEWSCATE', respose.data);
        })
}

export const getNewsCateHome = ({ commit }) => {
    axios.get('https://petadoption.j.layershift.co.uk/newscategory/')
        .then(respose => {
            commit('SET_NEWSCATE_HOME', respose.data);
        })
}

export const getNew = ({ commit }, newsId) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/news/${newsId}`)
        .then(respose => {
            commit('SET_NEW', respose.data);
        })
}

export const getResultNews = ({ commit }, resultSearch) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/news?pojo.title=${resultSearch.search}&pojo.newsCategoryDTO.newsCategoryId=${resultSearch.category}&maxItem=${resultSearch.record}&page=${resultSearch.page}`)
        .then(respose => {
            console.log(resultSearch)
            commit('SET_SEARCHNEWS', respose.data);
            console.log(respose.data)
        })
}

export const setRecordNews = ({ commit }, record) => {
    let data = []
    axios.get(`https://petadoption.j.layershift.co.uk/admin/news?maxItem=${record}`)
        .then(respose => {
            commit('SET_RECORDNEWS', data = { news: respose.data, record: record });
        })
}

export const setNewsCategory = ({ commit }, Category) => {
    let data = []
    axios.get(`https://petadoption.j.layershift.co.uk/admin/news?pojo.newsCategoryDTO.newsCategoryId=${Category}`)
        .then(respose => {
            commit('SET_NEWSCATEGORY', data = { news: respose.data, Category: Category });
        })
}

export const addNewsCate = ({ commit, dispatch }, newsCate) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.post('https://petadoption.j.layershift.co.uk/admin/newscategory/', newsCate, config)
        .then(respose => {
            commit('SET_NEWSCATE', respose.data)
            dispatch("addNote", {
                type: 'success',
                message: 'Thêm Danh Mục thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/newscategory/')
        .then(respose => {
            commit('SET_NEWSCATE', respose.data);
        })
        })
}

export const updateNewsCate = ({ commit, dispatch }, newsCate) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/newscategory/', newsCate, config)
        .then(respose => {
            commit('SET_NEWSCATE', respose.data)
            dispatch("addNote", {
                type: 'success',
                message: 'Sửa Danh Mục thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/newscategory/')
        .then(respose => {
            commit('SET_NEWSCATE', respose.data);
        })
        })
        
}

export const addNews = ({ commit, dispatch }, news,) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.post('https://petadoption.j.layershift.co.uk/admin/news/', news, config)
        .then(respose => {
            commit('ADD_NEWS', respose.data)
            dispatch("addNote", {
                type: 'success',
                message: 'Thêm tin tức thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/news')
             .then(respose => {
            commit('SET_NEWS_', respose.data);
        })
        })
        .catch((error) => {
            if(error.response.status == 400) {
                dispatch("addNote", {
                    type: 'danger',
                    message: 'Vui Lòng Nhập Đủ'
                })
            }
        })
}

export const updateNews = ({ commit, dispatch }, news) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    console.log(config)
    console.log(news)
    axios.put('https://petadoption.j.layershift.co.uk/admin/news/', news, config)
        .then(respose => {
            commit('UPDATE_NEWS', respose.data)
            dispatch("addNote", {
                type: 'success',
                message: 'Sửa Tin Tức thành công'
            })
        })
}

export const deleteNews = ({ commit, dispatch }, newsId) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        },
        data: [{ "newsId": newsId }]
    };
    axios.delete('https://petadoption.j.layershift.co.uk/admin/news/', config)
        .then(respose => {
            commit('DELETE_NEWS', newsId)
            dispatch("addNote", {
                type: 'danger',
                message: 'Xoá tin tức thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/news')
             .then(respose => {
            commit('SET_NEWS_', respose.data);
        })
        })
}

export const getNewsHome = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/news?sortProperty=modifiedDate&sortValue=DESC&maxItem=4&page=${data.page}`)
        .then(respose => {
            console.log(respose.data)
            commit('SET_NEWSHOME', respose.data);
        })
}

export const getNewsHomeDetail = ({ commit }, id) => {
    axios.get(`https://petadoption.j.layershift.co.uk/news/${id}`)
        .then(respose => {
            console.log(respose.data)
            commit('SET_NEWSHOME_DETAIL', respose.data);
        })
}

export const getNewsCateByIdHome = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/newscategory/${data}/news`)
        .then(respose => {
           console.log(respose.data)
            commit('SET_NEWSHOME_BYCATE', respose.data);
        })
}

    // Kết thúc Xử Lí Tin Tức
    // Xử Lý Thú Cưng
export const getPets = ({ commit } , data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/pet?maxItem=${data.record}&page=${data.page}`)
        .then(respose => {
            commit('SET_PETS', respose.data);
        })
}

export const getPetEntryType = ({ commit } , data) => {
    axios.get('https://petadoption.j.layershift.co.uk/admin/petentrytype/')
        .then(respose => {
            commit('SET_PetEntryType', respose.data);
        })
}

export const getPetEntryStatus = ({ commit } , data) => {
    axios.get('https://petadoption.j.layershift.co.uk/admin/petentrystatus/')
        .then(respose => {
            commit('SET_PetEntryStatus', respose.data);
        })
}


export const getRqPet = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpet?page=${data.page}&maxItem=${data.record}`)
        .then(respose => {
            console.log(respose)
            commit('SET_RQ_PET', respose.data);
        })
}


export const getNewRqPet = ({ commit }) => {
    axios.get('https://petadoption.j.layershift.co.uk/admin/requestpet/pendding')
        .then(respose => {
            commit('SET_TOTAL_RQ_PET', respose.data);
        })
}

export const getNewAppoint = ({ commit }) => {
    axios.get('https://petadoption.j.layershift.co.uk/admin/requestpet/today')
        .then(respose => {
            commit('SET_APPOINT_TODAY', respose.data);
        })
}

export const getPet = ({ commit }, petId) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/pet/${petId}`)
        .then(respose => {
            commit('SET_PET', respose.data);
        })
    
}

export const getPetHome = ({ commit }, petId) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/pet/${petId}`)
        .then(respose => {
            commit('SET_PET_HOME', respose.data);
        })

}




export const getResultPets = ({ commit }, query) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/pet?pojo.petName=${query}`)
        .then(respose => {
            commit('SET_RESULTPET', respose.data);
        })
}

export const getResultRqPets = ({ commit }, query) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpet?pojo.phoneNumber=${query}`)
        .then(respose => {
            commit('SET_RESULT_RQ_PET', respose.data);
        })
}

export const getAppointment = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpet/appointment?pojo.id=${data.search}&pojo.requestAdoptionPetDTO.requesrAdoptionPerId=${data.searchId}&page=${data.page}&maxItem=${data.record}`)
        .then(respose => {
            commit('SET_REQUEST_APPOINT', respose.data);
        })
}


export const getResultRqPetsById = ({ commit }, query) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpet?pojo.requesrAdoptionPerId=${query}`)
        .then(respose => {
            commit('SET_RESULT_RQ_PET', respose.data);
        })
}

export const getResultPetsById = ({ commit, dispatch }, query) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/pet?pojo.petId=${query}`)
        .then(respose => {
            commit('SET_RESULTPET_BY_ID', respose.data);
        })
}

export const addPet = ({ commit, dispatch }, pet) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.post('https://petadoption.j.layershift.co.uk/admin/pet/', pet, config)
        .then(respose => {
            commit('ADD_PET', respose.data)
            axios.get(`https://petadoption.j.layershift.co.uk/admin/pet?maxItem=4&page=1`)
            .then(respose => {
            commit('SET_PETS', respose.data);
            dispatch("addNote", {
                type: 'success',
                message: 'Thêm Thú Nuôi thành công'
            })
        })
            
        })
        .catch((error) => {
            if(error.response.status == 400) {
                dispatch("addNote", {
                    type: 'danger',
                    message: 'Vui Lòng Nhập Đủ'
                })
            }
        })
}





export const rqPet = ({ commit, dispatch }, pet) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.post('https://petadoption.j.layershift.co.uk/requestpet', pet, config)
        .then(respose => {
            commit('ADD_RQ_PET', respose.data)
            dispatch("addNote", {
                type: 'success',
                message: 'Gửi Yêu Cầu thành công'
            })
        })
}

export const setPetsStatus = ({ commit }, query) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/pet?status=${query}`)
        .then(respose => {
            commit('SET_FIND_PETS_STT', respose.data );
        })
}

export const getPetStatusType = ({ commit }, query) => {
    axios.get('https://petadoption.j.layershift.co.uk/admin/petstatustype')
        .then(respose => {
            commit('SET_PET_STATUS_TYPE', respose.data );
        })
}

export const getPetStatusEntry = ({ commit }, query) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/pet/${query}/petstatus`)
        .then(respose => {
            commit('SET_PET_STATUS_ENTRY', respose.data );
        })
}


export const setRecord = ({ commit }, record) => {
    let data = []
    axios.get(`https://petadoption.j.layershift.co.uk/admin/pet?sortProperty=modifiedDate&sortValue=DESC&maxItem=${record}&page=1`)
        .then(respose => {
            commit('SET_RECORD', data = { pets: respose.data, record: record });
        })
}

export const updatePet = ({ commit, dispatch }, pet) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/pet/', pet.data, config)
        .then(respose => {      
            
            dispatch("addNote", {
                type: 'success',
                message: 'Sửa Thông Tin Thú Nuôi thành công'
            })  
            axios.get(`https://petadoption.j.layershift.co.uk/admin/pet/${pet.petId}`)
            .then(respose => {
            commit('SET_PET', respose.data);    
            
        })
        
        })
        .catch((error) => {
            if(error.response.status == 400) {
                dispatch("addNote", {
                    type: 'danger',
                    message: 'Sửa không thành công, vui lòng nhập đủ'
                })
            }
        })
        
    
}

export const conf = ({ commit, dispatch }, form) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/requestpet/', form, config)
        .then(respose => {
            commit('UPDATE_COF', respose.data)
            dispatch("addNote", {
                type: 'primary',
                message: 'Đã Xác Nhận'
            })
            axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpet/${form.requestAdoptionPetAppointmentDTO.id}`)
        .then(respose => {
            commit('SET_RQ_ADPOT', respose.data);
        })
        })
}

export const confAppoint = ({ commit, dispatch }, form) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/requestpet/appointment/', form, config)
        .then(respose => {
            commit('UPDATE_COF', respose.data)
            dispatch("addNote", {
                type: 'primary',
                message: 'Đã Xác Nhận'
            })
            axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpet/appointment/${form.requestAdoptionPetAppointmentDTO.id}`)
        .then(respose => {
            commit('SET_RQ_APPPOINT', respose.data);
        })
        })
}

export const updateAppoint = ({ commit, dispatch }, form) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/requestpet/appointment/date/', form, config)
        .then(respose => {
            commit('UPDATE_COF', respose.data)
            dispatch("addNote", {
                type: 'primary',
                message: 'Đã Thay Đổi'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/requestpet/today')
            .then(respose => {
            commit('SET_APPOINT_TODAY', respose.data);
        })
        })
}

export const updateRqAppointContact = ({ commit, dispatch }, form) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/requestpet/appointment/', form, config)
        .then(respose => {
            commit('UPDATE_COF', respose.data)
            dispatch("addNote", {
                type: 'primary',
                message: 'Đã Xác Nhận'
            })
            axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpet/appointment/${form.requestAdoptionPetAppointmentDTO.id}`)
        .then(respose => {
            commit('SET_RQ_APPPOINT', respose.data);
        })
        })
}

export const Appointment = ({ commit, dispatch }, form) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/requestpet/', form, config)
        .then(respose => {
            commit('UPDATE_COF', respose.data)
            dispatch("addNote", {
                type: 'primary',
                message: 'Tạo Cuộc Hẹn Thành Công'
            })
            axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpet/${form.requestAdoptionPetDTO.requesrAdoptionPerId}`)
            .then(respose => {
            commit('SET_RQ_ADPOT', respose.data);    
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/requestpet/today')
            .then(respose => {
            commit('SET_APPOINT_TODAY', respose.data);
        })
            })
            .catch((error) => {
                console.log(error.response)
            })
}

export const cancelRq = ({ commit, dispatch }, form) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/requestpet/', form, config)
        .then(respose => {
            commit('UPDATE_COF', respose.data)
            dispatch("addNote", {
                type: 'primary',
                message: 'Đã Hủy Yêu Cầu'
            })
            axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpet/${form.requestAdoptionPetDTO.requesrAdoptionPerId}`)
        .then(respose => {
            commit('SET_RQ_ADPOT', respose.data);
        })
        })
}

export const cancelAppoint = ({ commit, dispatch }, form) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/requestpet/appointment/', form, config)
        .then(respose => {
            commit('UPDATE_COF', respose.data)
            dispatch("addNote", {
                type: 'danger',
                message: 'Đã Hủy Yêu Cầu'
            })
            axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpet/appointment/${form.requestAdoptionPetAppointmentDTO.id}`)
        .then(respose => {
            commit('SET_RQ_APPPOINT', respose.data);
        })
        })
}

export const successAppointment = ({ commit, dispatch }, form) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/requestpet/appointment/', form, config)
        .then(respose => {
            commit('UPDATE_COF', respose.data)
            dispatch("addNote", {
                type: 'primary',
                message: 'Giao Dịch Thành Công'
            })
            axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpet/appointment/${form.requestAdoptionPetAppointmentDTO.id}`)
        .then(respose => {
            commit('SET_RQ_APPPOINT', respose.data);
        })
        })
}

export const deletePet = ({ commit, dispatch }, pet) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        },
        data: [{ "petId": pet }]
    };
    axios.delete('https://petadoption.j.layershift.co.uk/admin/pet/', config)
        .then(respose => {
            commit('DELETE_PET', pet)
            axios.get(`https://petadoption.j.layershift.co.uk/admin/pet?maxItem=4&page=1`)
            .then(respose => {  
            commit('SET_PETS', respose.data);
        })
            dispatch("addNote", {
                type: 'danger',
                message: 'Xoá Thú Nuôi thành công'
            })
        })
}
export const getPetDog = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/pet?sortProperty=modifiedDate&sortValue=DESC&maxItem=${data}&pojo.petTypeDTO.petTypeId=${1}`)
        .then(respose => {
            commit('SET_PETS_DOG', respose.data);
        })
}

export const getPetCat = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/pet?sortProperty=modifiedDate&sortValue=DESC&maxItem=${data}&pojo.petTypeDTO.petTypeId=${2}`)
        .then(respose => {
            commit('SET_PETS_CAT', respose.data);
        })
}

export const requesrAdoptionPerId = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpet/${data}`)
        .then(respose => {
            commit('SET_RQ_ADPOT', respose.data);
        })
}

export const requesrAppointPerId = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpet/appointment/${data}`)
        .then(respose => {
            commit('SET_RQ_APPPOINT', respose.data);
        })
}

export const updateRqContact = ({ commit, dispatch }, form) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/requestpet/', form, config)
        .then(respose => {
            commit('UPDATE_COF', respose.data)
            dispatch("addNote", {
                type: 'primary',
                message: 'Đã Xác Nhận'
            })
            axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpet/${form.requestAdoptionPetDTO.requesrAdoptionPerId}`)
        .then(respose => {
            commit('SET_RQ_ADPOT', respose.data);
        })
        })
}

export const getPetOther = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/pet?sortProperty=modifiedDate&sortValue=DESC&maxItem=${data}&pojo.petTypeDTO.petTypeId=${3}`)
        .then(respose => {
            commit('SET_PETS_OTHER', respose.data);
        })
}

export const getPetsHome = ({ commit }, recordPet) => {
    axios.get(`https://petadoption.j.layershift.co.uk/pet?sortProperty=modifiedDate&sortValue=DESC&maxItem=${recordPet}`)
        .then(respose => {
            commit('SET_PETS_HOME', respose.data);
        })
}

export const getResultSearchAdopt = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/pet?sortProperty=modifiedDate&sortValue=DESC&maxItem=${data.record}&pojo.age=${data.agePet}&pojo.gender=${data.genderPet}&pojo.color=${data.color}&pojo.petName=${data.namePet}`)
        .then(respose => {
            commit('SET_ALL_PETS', respose.data);
        })
}
    //Kết Thúc Xử Lý Pet
    //Xử Lý Sản Phẩm
export const getProductCate = ({ commit }) => {
    axios.get('https://petadoption.j.layershift.co.uk/admin/productcategory?sortProperty=modifiedDate&sortValue=DESC&maxItem=4&page=1')
        .then(respose => {
            commit('SET_PRODUCTCATE', respose.data);
        })
}

export const getProducts = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/product?maxItem=${data.record}&page=${data.page}`)
        .then(respose => {
            commit('SET_PRODUCTS', respose.data);
        })
}

export const getProductsHome = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/product?maxItem=${data.record}&page=${data.page}`)
        .then(respose => {
            console.log(respose.data)
            commit('SET_PRODUCTS_HOME', respose.data);
        })
}

export const addProduct = ({ commit, dispatch }, products,) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.post('https://petadoption.j.layershift.co.uk/admin/product', products, config)
        .then(respose => {
            commit('ADD_PRODUCT', respose.data)
            dispatch("addNote", {
                type: 'success',
                message: 'Thêm Sản Phẩm thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/product')
            .then(respose => {
            commit('SET_PRODUCTS', respose.data);
        })
        })
        .catch((error) => {
            if(error.response.status == 400) {
                dispatch("addNote", {
                    type: 'danger',
                    message: 'Vui Lòng Nhập Đủ'
                })
            }
        })
        
}

export const addProductCate = ({ commit, dispatch }, products,) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.post('https://petadoption.j.layershift.co.uk/admin/productcategory', products, config)
        .then(respose => {
            commit('ADD_PRODUCTCATE', respose.data)
            dispatch("addNote", {
                type: 'success',
                message: 'Thêm Danh Mục thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/productcategory?sortProperty=modifiedDate&sortValue=DESC&maxItem=4&page=1')
            .then(respose => {
            commit('SET_PRODUCTCATE', respose.data);
        })
        })
       
}

export const deleteProCate = ({ commit, dispatch }, productCategoryId) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        },
        data: [{ "productCategoryId": productCategoryId }]
    };
    axios.delete('https://petadoption.j.layershift.co.uk/admin/productcategory', config)
        .then(respose => {
            commit('DELETE_PROCATE', productCategoryId)
            dispatch("addNote", {
                type: 'danger',
                message: 'Xoá Danh mục thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/productcategory?sortProperty=modifiedDate&sortValue=DESC&maxItem=4&page=1')
            .then(respose => {
            commit('SET_PRODUCTCATE', respose.data);
        })
        })
        

}

export const deleteProduct = ({ commit, dispatch }, productId) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        },
        data: [{ "productId": productId }]
    };
    axios.delete('https://petadoption.j.layershift.co.uk/admin/product', config)
        .then(respose => {
            commit('DELETE_PRODUCT', productId)
            dispatch("addNote", {
                type: 'danger',
                message: 'Xoá Sản Phẩm thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/product')
            .then(respose => {
            commit('SET_PRODUCTS', respose.data);
        })
        })
       

}
//Kết thúc xử lý Sản Phẩm

    //Các Xử Lý Khác
export const setRqStatus = ({ commit }, query) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpetstatus/${query}/requestpet`)
        .then(respose => {
            commit('SET_FIND_RQ_PETS_STT', respose.data );
        })
}

export const setRqStatus1 = ({ commit }, query) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpetstatus/${query}/requestpet`)
        .then(respose => {
            commit('SET_FIND_RQ_PETS_STT_1', respose.data );
        })
}

export const setRqStatus_Contact = ({ commit }, query) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/requestpetstatus/${query}/requestpet`)
        .then(respose => {
            commit('SET_FIND_RQ_PETS_STT_CONTATCT', respose.data );
        })
}


export const getPage = ({ commit }, pageRecord) => {
    let data = []
    axios.get(`https://petadoption.j.layershift.co.uk/admin/pet?sortProperty=modifiedDate&sortValue=DESC&maxItem=${pageRecord.record}&page=${pageRecord.page}`)
        .then(respose => {
            commit('SET_PAGE', data = { pets: respose.data, page: pageRecord.page, record: pageRecord.record });
        })
}

// export const getPageNews = ({ commit }, pageRecord) => {
//     let data = []
//     axios.get(`https://petadoption.j.layershift.co.uk/admin/news?maxItem=${pageRecord.record}&page=${pageRecord.page}&pojo.title=${pageRecord.search}`)
//         .then(respose => {
//             commit('SET_PAGENEWS', data = { news: respose.data, page: pageRecord.page, search: search});
//         })
// }

export const handingWait = ({ commit, dispatch }, rq) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/requestpet/', rq, config)
        .then(respose => {
            dispatch("addNote", {
                type: 'success',
                message: 'Chuyển Sang Đang Liên Hệ'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/requestpet/pendding')
            .then(respose => {
            commit('SET_TOTAL_RQ_PET', respose.data);
        })
        })
}

export const setDark = ({ commit }, color) => {
    commit('SET_DARK', color)
}

export const setStriped = ({ commit, dispatch }, color) => {
    dispatch('setDark', color)
}


export const addNote = ({ commit }, notes) => {
    commit('PUSH_NOTE', notes)
}

export const deleteNote = ({ commit }, notes) => {
    commit('DELETE_NOTE', notes)
}

//  CHO TRANG CHỦ
export const isLoading = ({ commit }) => {
    let data = "Loading"
    commit('SET_LOADDING', data)
}
export const endLoad = ({ commit }) => {
    let data = "endLoad"
    commit('SET_LOADDING', data)
}

export const getEmployee = ({ commit } , data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/employee?page=${data.page}&pojo.employeeId=${data.search}`)
        .then(respose => {
            commit('SET_EMPLOYEE', respose.data);

        })
}

export const getEmployeeById = ({ commit }, id) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/employee/${id}`)
        .then(respose => {
            commit('SET_EMPLOYEE_BY_ID', respose.data);

        })
}

export const getDepartment = ({ commit }) => {
    axios.get('https://petadoption.j.layershift.co.uk/admin/department')
        .then(respose => {
            commit('SET_EMPLOYEE_DEPART', respose.data);

        })
}

export const getEmployeeRescueOrder = ({ commit } ,id) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/employee/${id}/rescueorder`)
        .then(respose => {
            commit('SET_EMPLOYEE_RESCUEODER', respose.data);

        })
}

export const addEmployee = ({ commit, dispatch }, employee) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.post('https://petadoption.j.layershift.co.uk/admin/employee/', employee, config)
        .then(respose => {
            commit('ADD_EMPLOYEE', respose.data)
            dispatch("addNote", {
                type: 'success',
                message: 'Thêm Nhân Viên thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/employee/')
            .then(respose => {
            commit('SET_EMPLOYEE', respose.data);

        })
        })
        .catch((error) => {
                dispatch("addNote", {
                    type: 'danger',
                    message: 'Vui Lòng Nhập Đủ Các Trường'
                })
        })
}

export const deleteEmployee = ({ commit, dispatch }, id) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        },
        data: [{ "employeeId": id }]
    };
    axios.delete('http://petadoption1.j.layershift.co.uk/admin/employee/', config)
        .then(respose => {
            dispatch("addNote", {
                type: 'danger',
                message: 'Xoá Nhân Viên thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/employee/')
            .then(respose => {
            commit('SET_EMPLOYEE', respose.data);
        })
        })
        .catch((error) => {
            dispatch("addNote", {
                type: 'danger',
                message: 'Xóa Nhân Viên không thành công'
            })
    })
       

}
export const updateEmployee = ({ commit, dispatch }, employee) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/employee/', employee, config)
        .then(respose => {
            // commit('SET_EMPLOYEE', respose.data)
            dispatch("addNote", {
                type: 'success',
                message: 'Sửa Nhân Viên thành công'
            })
            axios.get(`https://petadoption.j.layershift.co.uk/admin/employee/${employee.employeeId}`)
            .then(respose => {
            commit('SET_EMPLOYEE_BY_ID', respose.data);
        })
        })       
}
export const updateRescue = ({ commit, dispatch }, rescue) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/rescueorder/', rescue, config)
        .then(respose => {
            // commit('SET_EMPLOYEE', respose.data)
            dispatch("addNote", {
                type: 'success',
                message: 'Sửa Thông Tin Giải Cứu thành công'
            })
            axios.get(`https://petadoption.j.layershift.co.uk/admin/rescueorder/${rescue.rescueOrderId}`)
            .then(respose => {
            commit('SET_DETAIL_RESCUES', respose.data);
        })
        })
        
}

export const updateFoster = ({ commit, dispatch }, foster) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.put('https://petadoption.j.layershift.co.uk/admin/fosterpet/', foster, config)
        .then(respose => {
            // commit('SET_EMPLOYEE', respose.data)
            dispatch("addNote", {
                type: 'success',
                message: 'Sửa Thông Tin Giải Cứu thành công'
            })
            axios.get(`https://petadoption.j.layershift.co.uk/admin/fosterpet/${foster.fosterPetId}`)
            .then(respose => {
            commit('SET_DETAIL_FOSTER', respose.data);
        })
        })
        
}

export const getRescue = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/rescueorder?page=${data.page}`)
        .then(respose => {
            commit('SET_RESCUES', respose.data);

        })
}

export const getFosterPet = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/fosterpet?page=${data.page}`)
        .then(respose => {
            commit('SET_FOSTER_PET', respose.data);

        })
}

export const getDetailRescue = ({ commit }, id) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/rescueorder/${id}`)
        .then(respose => {
            commit('SET_DETAIL_RESCUES', respose.data);

        })
}

export const getDetailFoster = ({ commit }, id) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/fosterpet/${id}`)
        .then(respose => {
            commit('SET_DETAIL_FOSTER', respose.data);

        })
}


export const getEmployeeDepart = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/employee?pojo.departmentDTO.departmentId=${data.id}&pojo.employeeId=${data.search}`)
        .then(respose => {
            commit('SET_EMPLOYEE_BYDE', respose.data);

        })
}

export const getEmployeeFoster = ({ commit }, data) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/employee?pojo.departmentDTO.departmentId=${data.id}&pojo.employeeId=${data.search}`)
        .then(respose => {
            commit('SET_EMPLOYEE_FOSTER', respose.data);
        })
}

export const getEmployeeFosterForDetail = ({ commit }, id) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/employee/${id}/fosterpet`)
        .then(respose => {
            commit('SET_EMPLOYEE_FOSTER_FOR_DETAIL', respose.data);
        })
}


export const setEmployeeId = ({ commit, dispatch }, data) => {
    commit('SELECT_EMPLOYEE_BY_ID', data)
    dispatch("addNote", {
        type: 'success',
        message: `Đã Chọn ${data.name}`
    })
}

export const setEmployeeFoster = ({ commit, dispatch }, data) => {
    commit('SELECT_EMPLOYEE_FOSTER', data)
    dispatch("addNote", {
        type: 'success',
        message: `Đã Chọn Nhân Viên Chăm Sóc ${data.name}`
    })
}

export const setPetRescueOderId = ({ commit, dispatch }, data) => {
    commit('SELECT_PET_RESCUE_ORDER_ID', data)
    dispatch("addNote", {
        type: 'success',
        message: `Đã Chọn ${data.name}`
    })
}

export const addRescue = ({ commit, dispatch }, datas) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.post('https://petadoption.j.layershift.co.uk/admin/rescueorder/', datas, config)
        .then(respose => {
            dispatch("addNote", {
                type: 'success',
                message: 'Thêm Thông Tin Giải Cứu thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/rescueorder/')
        .then(respose => {
            commit('SET_RESCUES', respose.data);
        })
        })
        .catch((error) => {
            if(error.response.status == 400) {
                dispatch("addNote", {
                    type: 'danger',
                    message: 'Vui Lòng Nhập Đủ'
                })
            }
        })
}

export const addFoster = ({ commit, dispatch }, datas) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.post('https://petadoption.j.layershift.co.uk/admin/fosterpet/', datas, config)
        .then(respose => {
            dispatch("addNote", {
                type: 'success',
                message: 'Thêm Thông Tin Chăm Sóc thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/fosterpet/')
        .then(respose => {
            commit('SET_FOSTER_PET', respose.data);
        })
        })
        .catch((error) => {
            if(error.response.status == 400) {
                dispatch("addNote", {
                    type: 'danger',
                    message: 'Vui Lòng Nhập Đủ'
                })
            }
        })
}

export const getPetRescueorder = ({ commit }, id) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/rescueorder/pet?pojo.petId=${id}`)
        .then(respose => {
            commit('SET_PET_RESCUE_ORDER', respose.data);

        })
}

export const getPetFoster = ({ commit } , id) => {
    axios.get(`https://petadoption.j.layershift.co.uk/admin/fosterpet/pet?pojo.petId=${id}`)
        .then(respose => {
            commit('SET_PET_FOSTER', respose.data);

        })
}

export const setRescueOrderId = ({ commit }, data) => {
    commit('SELECT_RescueOrder_BY_ID', data)
}

export const setFosterPetId = ({ commit }, data) => {
    commit('SELECT_FOSTERPET_BY_ID', data)
}

export const setPetFosterId = ({ commit, dispatch }, data) => {
    commit('SELECT_FOSTER_PET_BY_ID', data)
    dispatch("addNote", {
        type: 'success',
        message: `Đã Chọn ${data.name}`
    })
}

export const addPetToRescue = ({ commit, dispatch }, data) => {
    let petId = JSON.stringify(data.from1)
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.post(`https://petadoption.j.layershift.co.uk/admin/rescueorder/${data.rescueOrderId}/pet`, petId, config)
        .then(respose => {
            dispatch("addNote", {
                type: 'success',
                message: 'Thêm Pet Vào Giải Cứu thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/rescueorder/')
            .then(respose => {
            commit('SET_RESCUES', respose.data);
            })
             axios.get('https://petadoption.j.layershift.co.uk/admin/rescueorder/pet')
            .then(respose => {
            commit('SET_PET_RESCUE_ORDER', respose.data);
        })
        })
        .catch((error) => {
            if(error.response.status == 400) {
                dispatch("addNote", {
                    type: 'danger',
                    message: 'Vui Lòng Nhập Đủ'
                })
            }
        })
}

export const addPetToFoster = ({ commit, dispatch }, data) => {
    let petId = JSON.stringify(data.from1)
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.post(`https://petadoption.j.layershift.co.uk/admin/fosterpet/${data.fosterPetId}/pet`, petId, config)
        .then(respose => {
            dispatch("addNote", {
                type: 'success',
                message: 'Thêm Pet Vào Chăm Sóc thành công'
            })
            axios.get('https://petadoption.j.layershift.co.uk/admin/fosterpet/')
            .then(respose => {
            commit('SET_FOSTER_PET', respose.data);
            })
             axios.get('https://petadoption.j.layershift.co.uk/admin/fosterpet/pet')
            .then(respose => {
            commit('SET_PET_FOSTER', respose.data);
        })
        })
        .catch((error) => {
            if(error.response.status == 400) {
                dispatch("addNote", {
                    type: 'danger',
                    message: 'Vui Lòng Nhập Đủ'
                })
            }
        })
}

export const deletePetRescue = ({ commit, dispatch }, datas) => {
    console.log(datas.form1.petId)
    let config = {
        headers: {
            'Content-Type': 'application/json'
        },
        data: { "petId": datas.form1.petId }
    };
    
    axios.delete(`https://petadoption.j.layershift.co.uk/admin/rescueorder/${datas.rescueOrderId}/pet`, config)
        .then(respose => {
            // commit('DELETE_NEWS', newsId)
            dispatch("addNote", {
                type: 'danger',
                message: 'Xoá Thú Nuôi thành công'
            })
            axios.get(`https://petadoption.j.layershift.co.uk/admin/rescueorder/${datas.rescueOrderId}`)
            .then(respose => {
            commit('SET_DETAIL_RESCUES', respose.data);
            })
        })
        .catch((error) => {
            if(error.response.status == 400) {
                dispatch("addNote", {
                    type: 'danger',
                    message: 'Xóa không thành công'
                })
            }
        })
}

export const deletePetFoster = ({ commit, dispatch }, datas) => {
    console.log(datas.form1.petId)
    let config = {
        headers: {
            'Content-Type': 'application/json'
        },
        data: { "petId": datas.form1.petId }
    };
    
    axios.delete(`https://petadoption.j.layershift.co.uk/admin/fosterpet/${datas.fosterPetId}/pet`, config)
        .then(respose => {
            // commit('DELETE_NEWS', newsId)
            dispatch("addNote", {
                type: 'danger',
                message: 'Xoá Thú Nuôi khỏi Chăm Sóc thành công'
            })
            axios.get(`https://petadoption.j.layershift.co.uk/admin/fosterpet/${datas.fosterPetId}`)
            .then(respose => {
            commit('SET_DETAIL_FOSTER', respose.data);
            })
        })
        .catch((error) => {
            if(error.response.status == 400) {
                dispatch("addNote", {
                    type: 'danger',
                    message: 'Xóa không thành công'
                })
            }
        })
}
