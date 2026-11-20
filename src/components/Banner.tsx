function Banner() {
  return (
    <div className="rounded bg-orange-400 p-6 text-white">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <p className="mb-2 inline-block bg-red-600 px-2 py-1 text-xs font-bold">
            FPT APTECH - SINCE 1999
          </p>
          <h1 className="text-2xl font-bold">
            HỌC LẬP TRÌNH <br />
            HỌC APTECH <br />
            HỌC TẠI FPT
          </h1>
        </div>
        <div>
          <img
            src="/image/banner.png"
            alt="banner"
            className="h-44 w-80 rounded border-2 border-white object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
