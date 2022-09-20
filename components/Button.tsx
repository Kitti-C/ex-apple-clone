interface Props {
  title?: string
  onClick?: () => void
  width?: string
  loading?: boolean
  padding?: string
  noIcon?: boolean
}

function Button({ title, onClick, width, loading, padding, noIcon }: Props) {
  return (
    <button type="submit">
      <div className="group relative inline-flex items-center justify-center overflow-hidden rounded-md p-4 px-8 py-2 font-semibold text-indigo-600 shadow-2xl">
        <span className="ease absolute top-0 left-0 -mt-10 -ml-3 h-40 w-40 rounded-full bg-red-500 blur-md transition-all duration-700" />
        <span className="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
          <span className="absolute bottom-0 left-0 -ml-10 h-24 w-24 rounded-full bg-pink-500 blur-md" />
          <span className="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-purple-500 blur-md" />
        </span>
        <span className="relative text-white">{title}</span>
      </div>
    </button>
  )
}

export default Button
