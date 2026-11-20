import type { ObjectItem } from '../types/object'

function ObjectCard({ object }: { object: ObjectItem }) {
  return (
    <div className="rounded border bg-white p-4 text-center shadow-sm">
      <img
        src={`/${object.image}`}
        alt={object.title}
        className="h-44 w-full rounded object-cover"
      />
      <h3 className="mt-3 text-base font-bold uppercase text-blue-700">
        {object.title}
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        {object.description}
      </p>
    </div>
  )
}

export default ObjectCard
