import CoreConcept from './CoreConcept.jsx'
import { CORE_CONCEPTS } from '../data.js';
import Section from './Section.jsx';

export default function CoreConcepts() {
    return (
        <Section title="Core concepts" id="core-concepts">
             <ul>
                {CORE_CONCEPTS.map((conceptItem) =>
                    <CoreConcept {...conceptItem} key={conceptItem.title} />
                )}
            </ul>
        </Section>
    );
}