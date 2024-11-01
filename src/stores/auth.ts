import { supabase } from '@/lib/supabaseClient'
import { profileQuery } from '@/utils/supaQueries'
import type { Session, User } from '@supabase/supabase-js'
import type { Tables } from 'database/types'

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<User | null>(null)
  const profile = ref<Tables<'profiles'> | null>(null)
  const isTraningAuthChanges = ref(false)
  const setProfile = async () => {
    if (!user.value) {
      profile.value = null
      return
    }
    if (!profile.value || profile.value.id !== user.value.id) {
      const { data } = await profileQuery({
        column: 'id',
        value: user.value.id
      })
      profile.value = data || null
    }
  }
  const setUser = async (userSession: null | Session = null) => {
    if (!userSession) {
      user.value = null
      profile.value = null
      return
    }
    user.value = userSession.user
    await setProfile()
  }
  const getSession = async () => {
    const { data } = await supabase.auth.getSession()
    if (data.session?.user) {
      await setUser(data.session)
    }
  }
  const trackAuthChanges = () => {
    if (isTraningAuthChanges.value) return
    isTraningAuthChanges.value = true
    supabase.auth.onAuthStateChange((event, session) => {
      setTimeout(async () => {
        await setUser(session)
      }, 0)
    })
  }

  return {
    user,
    profile,
    setUser,
    getSession,
    trackAuthChanges
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
