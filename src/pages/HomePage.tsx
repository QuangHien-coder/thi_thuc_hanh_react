import Banner from '../components/Banner'
import ObjectSection from '../components/ObjectSection'
import SubjectSection from '../components/SubjectSection'
import objectsData from '../data/objects.json'
import subjectsData from '../data/subjects.json'
import type { ObjectItem } from '../types/object'
import type { SubjectItem } from '../types/subject'

function HomePage() {
  const listObject: ObjectItem[] = objectsData
  const listSubject: SubjectItem[] = subjectsData

  return (
    <div>
      <Banner />
      <ObjectSection objects={listObject} />
      <SubjectSection subjects={listSubject} />
    </div>
  )
}

export default HomePage
