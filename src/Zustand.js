import create from 'zustand'
import { persist } from 'zustand/middleware'


const useStoreTemporary = create((set) => ({
    snackbarOpen: false,
    setSnackbarOpen: () => set({ snackbarOpen: true }),
    setSnackbarOpenFalse: (open) => set({ snackbarOpen: open })
}))


const useStore = create(
    persist(
        (set, get) => ({
            upcomingSessionState: [],
            setUpcomingSession: (session) => set((state) => ({ upcomingSessionState: session })),
            // setUpcomingSession: (session) => set((state) => ({ upcomingSessionState: [...state.upcomingSessionState, session] })),
            removeSessions: () => set({ upcomingSessionState: [] }),
        }),
        {
            name: 'therapy-session', // unique name
            getStorage: () => sessionStorage,
        }
    )
)


const useStoreUser = create(
    persist(
        (set, get) => ({
            userInfo: {},
            setUserInfo: (user) => set({ userInfo: user }),
            userLogin: {},
            setUserLogin: (user) => set({ userLogin: user }),
        }),
        {
            name: 'current-user', // unique name
            getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
        }
    )
)



export { useStore, useStoreTemporary, useStoreUser }

