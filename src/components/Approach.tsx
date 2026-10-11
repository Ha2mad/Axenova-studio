const pillars = [
  {
    title: 'Gameplay First',
    text: 'We prioritize intuitive controls, engaging mechanics, and satisfying player experiences.',
  },
  {
    title: 'Built with Care',
    text: 'We focus on polish, performance, usability, and continuous improvement.',
  },
  {
    title: 'Always Improving',
    text: 'We aim to refine our games and explore new ideas with every project.',
  },
];

export function Approach() {
  return (
    <section id="approach" className="section">
      <div className="container">
        <h2 className="section__title">Our approach</h2>
        <ul className="pillars">
          {pillars.map((p) => (
            <li key={p.title} className="pillar">
              <h3 className="pillar__title">{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
