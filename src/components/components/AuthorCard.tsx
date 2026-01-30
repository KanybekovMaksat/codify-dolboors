import { GraduationCap, Clock, TrendingUp, Award } from 'lucide-react';
import { Project } from '../data/mockProject';

interface AuthorCardProps {
  project: Project;
}

export default function AuthorCard({ project }: AuthorCardProps) {
  const { student } = project;

  return (
    <section className="py-12 sm:py-24  bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Автор проекта
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь со студентом и его путём обучения
          </p>
        </div>

        <div className=" mx-auto">
          <div className="bg-white rounded-3xl  border border-slate-200 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-12 flex flex-col items-center justify-center text-center text-white">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6">
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-2">{student.name}</h3>
                <p className="text-xl text-blue-100 mb-6">{student.age} лет</p>
                {/* <div className="w-full space-y-3">
                  <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <GraduationCap className="w-5 h-5" />
                    <span className="text-sm">{student.course}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">{student.duration}</span>
                  </div>
                </div> */}
              </div>

              <div className="md:w-3/5 p-8 lg:p-12">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-gray-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">До курса</h4>
                  </div>
                  <ul className="space-y-2">
                    {student.skillsBefore.map((skill, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t-2 border-gray-200 pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">После курса</h4>
                  </div>
                  <ul className="space-y-3">
                    {student.skillsAfter.map((skill, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                      >
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-800 font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
