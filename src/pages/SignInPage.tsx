function SignInPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Sign In</h1>
      <input placeholder="Email" className="w-full rounded border px-3 py-2" />
      <input placeholder="Password" type="password" className="w-full rounded border px-3 py-2" />
      <button className="w-full rounded bg-amber-500 py-2 text-white hover:bg-amber-600">
        Sign In
      </button>
    </div>
  )
}

export default SignInPage
