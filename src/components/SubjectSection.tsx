import type { SubjectItem } from '../types/subject'
import SubjectCard from './SubjectCard'

function SubjectSection({ subjects }: { subjects: SubjectItem[] }) {
  return (
    <div className="my-8">
      <h2 className="mb-6 text-center text-xl font-bold uppercase">
        WHAT IS THE COURSE PROGRAM?
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {subjects.map((sub) => (
          <SubjectCard key={sub.id} subject={sub} />
        ))}
      </div>

      {subjects.length > 0 && (
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-gray-600">
          {subjects[0].description}
        </p>
      )}
    </div>
  )
}

export default SubjectSection
