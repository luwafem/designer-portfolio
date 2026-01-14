import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Users, Ruler, Clock, CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/designerData';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-serif font-bold mb-4">Loading Project...</div>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Portfolio
            </Link>
            
            <div className="flex items-center">
              <div className="text-2xl font-serif font-bold text-primary-700">
                C<span className="text-accent-gold">A</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={project.gallery[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-6">
                <span className="text-sm font-medium">{project.category}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={20} className="mr-2" />
                  <span>Completed {project.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold mb-8">Project Overview</h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {project.fullDescription}
              </p>

              {/* Gallery */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif font-bold mb-6">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((img, index) => (
                    <div 
                      key={index}
                      className="relative rounded-xl overflow-hidden cursor-pointer group"
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsLightboxOpen(true);
                      }}
                    >
                      <img
                        src={img}
                        alt={`${project.title} - View ${index + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Process */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6 text-primary-600">Challenges</h3>
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <X size={20} className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6 text-primary-600">Solutions</h3>
                  <ul className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Project Specs */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-2xl font-serif font-bold mb-6">Project Specifications</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Ruler size={24} className="text-primary-600 mr-4" />
                      <div>
                        <div className="text-sm text-gray-500">Total Area</div>
                        <div className="text-lg font-medium">{project.specs.area}</div>
                      </div>
                    </div>
                    
                    {project.specs.bedrooms && (
                      <div className="flex items-center">
                        <Users size={24} className="text-primary-600 mr-4" />
                        <div>
                          <div className="text-sm text-gray-500">Bedrooms</div>
                          <div className="text-lg font-medium">{project.specs.bedrooms}</div>
                        </div>
                      </div>
                    )}
                    
                    {project.specs.floors && (
                      <div className="flex items-center">
                        <div className="w-6 h-6 flex items-center justify-center text-primary-600 mr-4">
                          <span className="text-lg">🏢</span>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Floors</div>
                          <div className="text-lg font-medium">{project.specs.floors}</div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center">
                      <Clock size={24} className="text-primary-600 mr-4" />
                      <div>
                        <div className="text-sm text-gray-500">Project Duration</div>
                        <div className="text-lg font-medium">{project.specs.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Provided */}
                <div className="bg-primary-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-2xl font-serif font-bold mb-6">Services Provided</h3>
                  
                  <div className="space-y-4">
                    {project.services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-3 h-3 bg-primary-600 rounded-full mr-3"></div>
                        <span className="font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-4">Start Your Project</h3>
                  <p className="mb-6 text-primary-100">
                    Inspired by this project? Let's create something amazing together.
                  </p>
                  <Link
                    to="/#contact"
                    className="inline-block w-full bg-white text-primary-600 text-center font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">Related Projects</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {projects
                .filter(p => p.id !== project.id && p.category === project.category)
                .slice(0, 3)
                .map(relatedProject => (
                  <Link
                    key={relatedProject.id}
                    to={`/project/${relatedProject.id}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedProject.imageUrl}
                        alt={relatedProject.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="text-sm text-primary-600 font-medium mb-2">
                        {relatedProject.category}
                      </div>
                      <h3 className="text-xl font-serif font-bold mb-2">{relatedProject.title}</h3>
                      <p className="text-gray-600 text-sm">{relatedProject.description}</p>
                    </div>
                  </Link>
                ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                View All Projects
                <ArrowLeft size={20} className="ml-2 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && project && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronLeft size={48} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronRight size={48} />
          </button>
          
          <div className="max-w-6xl max-h-[80vh]">
            <img
              src={project.gallery[currentImageIndex]}
              alt={`${project.title} - View ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
            {currentImageIndex + 1} / {project.gallery.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;