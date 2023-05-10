import create from 'zustand'
import {
    persist
} from 'zustand/middleware'


const useStoreTemporary = create((set) => ({
    snackbarOpen: false,
    setSnackbarOpen: () => set({
        snackbarOpen: true
    }),
    setSnackbarOpenFalse: (open) => set({
        snackbarOpen: open
    }),
    sidebarWidth: 300,
    setSidebarWidth: (width) => set({
        sidebarWidth: width
    })
}))


const useStore = create(
    persist(
        (set, get) => ({
            therapistsList: [],
            setTherapistsList: (list) => set((state) => ({
                therapistsList: list
            })),
            upcomingSessionState: [],
            setUpcomingSession: (session) => set((state) => ({
                upcomingSessionState: session
            })),
            // setUpcomingSession: (session) => set((state) => ({ upcomingSessionState: [...state.upcomingSessionState, session] })),
            removeSessions: () => set({
                upcomingSessionState: []
            }),
        }), {
            name: 'therapy-session', // unique name
            getStorage: () => sessionStorage,
        }
    )
)


const useStoreUser = create(
    persist(
        (set, get) => ({
            userInfo: {},
            setUserInfo: (user) => set({
                userInfo: user
            }),
            userLogin: {},
            setUserLogin: (user) => set({
                userLogin: user
            }),
        }), {
            name: 'current-user', // unique name
            getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
        }
    )
)



export {
    useStore,
    useStoreTemporary,
    useStoreUser
}
