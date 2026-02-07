import { Author } from '../types';

interface AuthorSidebarProps {
  author: Author;
}

export function AuthorSidebar({ author }: AuthorSidebarProps) {
  return (
    <aside className="author-sidebar">
      <div className="author-photo">
        <img src={author.photo} alt={author.fullName} />
      </div>

      <div className="author-info">
        <h3 className="author-name">{author.fullName}</h3>
        <p className="author-age">{author.age} лет</p>
      </div>

      <div className="author-skills">
        <div className="skills-section">
          <h4>Знал до курса:</h4>
          <div className="skills-list">
            {author.previousSkills.map((skill, idx) => (
              <span key={idx} className="skill-tag skill-previous">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h4>Изучил на курсе:</h4>
          <div className="skills-list">
            {author.newSkills.map((skill, idx) => (
              <span key={idx} className="skill-tag skill-new">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="author-testimonial">
        <h4>Отзыв о курсе:</h4>
        <blockquote>{author.testimonial}</blockquote>
      </div>
    </aside>
  );
}
