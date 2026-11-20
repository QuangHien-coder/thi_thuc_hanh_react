import type { ObjectItem } from '../types/object'
import ObjectCard from './ObjectCard'

function ObjectSection({ objects }: { objects: ObjectItem[] }) {
  return (
    <div className="my-8">
      <h2 className="mb-6 text-center text-xl font-bold uppercase">
        SHOULD WHO LEARN PROGRAMING IN FPT APTECH?
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {objects.map((obj) => (
          <ObjectCard key={obj.id} object={obj} />
        ))}
      </div>
    </div>
  )
}

export default ObjectSection
