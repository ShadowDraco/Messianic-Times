async function isAdmin(session) {
  if (!session.user) return false
  if (session.user.email !== 'stormethan10@gmail.com') return false

  return true
}

export default isAdmin
