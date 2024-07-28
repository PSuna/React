import {CORE_CONCEPTS} from '../data.js';
import CoreConcept from './CoreConcept.jsx';

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/*}  <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image = {CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}

        {/* List 개선 : 목록을 출력할때 주로 map 함수를 사용 */}
        {CORE_CONCEPTS.map((concepItem) => <CoreConcept key={concepItem.title} {...concepItem} />)}
      </ul>
    </section>
  );
}

export default CoreConcepts;

