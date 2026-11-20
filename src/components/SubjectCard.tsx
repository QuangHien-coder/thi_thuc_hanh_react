import type { SubjectItem } from '../types/subject'

function SubjectCard({ subject }: { subject: SubjectItem }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border bg-white p-3 shadow-sm">
        <img
          src={`/${subject.image}`}
          alt={subject.subject}
          className="h-16 w-16 object-contain"
        />
      </div>
      <p className="mt-2 text-xs font-semibold text-gray-700">{subject.subject}</p>
    </div>
  )
}

export default SubjectCard
