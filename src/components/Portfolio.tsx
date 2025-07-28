import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Download, 
  ExternalLink,
  Github,
  Calendar,
  Award,
  GraduationCap,
  Code,
  Users,
  ChevronUp
} from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Calista Salsabila<br />
              <span className="text-primary-glow">Citra Putri Winanto</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Fresh Graduate Informatics with a Passion for Machine Learning and UI/UX Design
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>calistasalsa.cpw@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+6281297801340</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bogor, Indonesia</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="btn-hero px-8 py-6 text-lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline-hero px-8 py-6 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-primary-glow border border-white/20 hover:bg-white/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/calistasalsabilacpw" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary">About Me</h2>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                As a final-year Informatics student at Universitas Singaperbangsa Karawang, I'm passionate about the intersection of technology and creativity, particularly in Machine Learning and UI/UX design. My academic journey has been enriched by a transformative one-semester exchange program that enhanced my problem-solving abilities, critical thinking skills, and adaptability in diverse environments.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm proficient in cutting-edge tools including Figma for design prototyping, VS Code for development, and Google Collaboratory for machine learning projects. My experience spans from developing NLP chatbot systems to creating comprehensive UI/UX designs, always with a focus on user-centered solutions and innovative technology applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">My Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Academic Service Chatbot */}
            <Card className="project-card h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-primary">Academic Service Chatbot Prototypes</CardTitle>
                  <Badge variant="secondary">March 2025 - June 2025</Badge>
                </div>
                <CardDescription className="text-primary-light font-medium">Machine Learning Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Engineered an advanced NLP pipeline using Long Short-Term Memory (LSTM) models to power chatbot responses for university academic services. Implemented data augmentation techniques and developed a user-friendly Flask web interface for real-time student interaction.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">LSTM</Badge>
                  <Badge variant="outline">NLP</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Flask</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Selena App */}
            <Card className="project-card h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-primary">Selena - Seller Financial Tracking App</CardTitle>
                  <Badge variant="secondary">Nov 2024 - Dec 2024</Badge>
                </div>
                <CardDescription className="text-primary-light font-medium">Machine Learning Cohort at Bangkit Academy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Conducted comprehensive exploratory data analysis on financial datasets and built an anomaly detection model using Autoencoder neural networks. Collaborated with cloud computing team to integrate the model into a scalable mobile application architecture.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Autoencoder</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Cloud Computing</Badge>
                  <Badge variant="outline">Data Analysis</Badge>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/itsmaul/Selena-App" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Masakuy Website */}
            <Card className="project-card h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-primary">Masakuy - Recipe Website</CardTitle>
                  <Badge variant="secondary">March 2024 - May 2024</Badge>
                </div>
                <CardDescription className="text-primary-light font-medium">Full Stack Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Led the complete project lifecycle from initial UI/UX design in Figma to full-stack development. Created a responsive recipe sharing platform using modern web technologies with robust database management and user authentication features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Figma</Badge>
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">MySQL</Badge>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/calistasalscpw/Web-Resep-Makanan" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Health Monitoring App */}
            <Card className="project-card h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-primary">Health Monitoring Application</CardTitle>
                  <Badge variant="secondary">March 2022 - May 2022</Badge>
                </div>
                <CardDescription className="text-primary-light font-medium">UI/UX Designer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Led the end-to-end design process during the COVID-19 pandemic, creating comprehensive user personas, journey maps, and wireframes. Developed a high-fidelity interactive prototype in Figma focusing on accessibility and user-centered design principles.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Figma</Badge>
                  <Badge variant="outline">UI/UX Design</Badge>
                  <Badge variant="outline">Prototyping</Badge>
                  <Badge variant="outline">User Research</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="project-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <GraduationCap className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl text-primary">Universitas Singaperbangsa Karawang</CardTitle>
                      <CardDescription className="text-base">Informatics, Computer Science</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">September 2021 - June 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-primary mb-2">GPA: 3.99/4.00</p>
                    <p className="text-muted-foreground">Outstanding academic performance with focus on machine learning and software development.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">Key Achievements:</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• IISMA 2023 scholarship recipient</li>
                      <li>• Maximum score in HCI UI/UX project</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <GraduationCap className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl text-primary">University of Padua</CardTitle>
                      <CardDescription className="text-base">IISMA Exchange Program, Computer Science</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">September 2023 - February 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Enhanced adaptability and critical thinking in an international academic setting. Gained hands-on experience with new software tools in Linux environments, including IDA and Docker.
                </p>
                <p className="font-semibold text-primary">Key Skills Developed:</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• International collaboration and communication</li>
                  <li>• Advanced time management in multicultural environment</li>
                  <li>• Technical proficiency in Linux-based development tools</li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Experience & Volunteering</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="project-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl text-primary">Google Developer Student Club Chapter Unsika</CardTitle>
                      <CardDescription className="text-base">Media and Creative Staff</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">August 2022 - August 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-primary mb-2">Key Contributions:</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Designed merchandise stickers for club members</li>
                      <li>• Created 25+ social media publications</li>
                      <li>• Enhanced club's visual brand identity</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      Contributed to the growth of the local developer community through creative design work and strategic social media content creation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl text-primary">Himpunan Mahasiswa Teknik Informatika</CardTitle>
                      <CardDescription className="text-base">Information and Communication Division</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">December 2021 - November 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-primary mb-2">Impact Metrics:</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 242% increase in Instagram profile visits</li>
                      <li>• 50+ visual publications created</li>
                      <li>• Biweekly interactive quiz programs</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      Dramatically improved student organization's online presence through strategic content creation and community engagement initiatives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Skills</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Code className="w-5 h-5" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">C++</Badge>
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">PHP</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Code className="w-5 h-5" />
                  Frameworks & Libraries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">Scikit-Learn</Badge>
                  <Badge variant="outline">NumPy</Badge>
                  <Badge variant="outline">Pandas</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Code className="w-5 h-5" />
                  Developer Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">VS Code</Badge>
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Google Colab</Badge>
                  <Badge variant="outline">Jupyter</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Code className="w-5 h-5" />
                  Design & Prototyping
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Figma</Badge>
                  <Badge variant="outline">Miro</Badge>
                  <Badge variant="outline">UI/UX Design</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Code className="w-5 h-5" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Data Analysis</Badge>
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">MySQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Code className="w-5 h-5" />
                  Soft Skills & Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Critical Thinking</Badge>
                  <Badge variant="outline">Problem Solving</Badge>
                  <Badge variant="outline">Project Management</Badge>
                  <Badge variant="outline">Indonesian (Native)</Badge>
                  <Badge variant="outline">English (TOEFL: 610)</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Achievements & Certifications</h2>
          <div className="max-w-6xl mx-auto">
            
            {/* Achievements */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="project-card text-center">
                  <CardContent className="pt-6">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-primary mb-2">Korea-ASEAN Academy</h4>
                    <p className="text-muted-foreground text-sm">Current Cohort Member</p>
                  </CardContent>
                </Card>
                <Card className="project-card text-center">
                  <CardContent className="pt-6">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-primary mb-2">Bangkit Academy</h4>
                    <p className="text-muted-foreground text-sm">Machine Learning Cohort</p>
                  </CardContent>
                </Card>
                <Card className="project-card text-center">
                  <CardContent className="pt-6">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-primary mb-2">IISMA Scholarship</h4>
                    <p className="text-muted-foreground text-sm">Indonesian International Student Mobility Awards</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Google IT Automation with Python (Coursera)',
                  'TensorFlow: Advanced Techniques Specialization (Coursera)',
                  'Belajar Analisis Data dengan Python (Dicoding)',
                  'Mathematics for Machine Learning and Data Science Specialization (Coursera)',
                  'Build Basic Generative Adversarial Networks (Coursera)',
                  'TensorFlow Data and Deployment (Coursera)',
                  'Machine Learning Specialization (Coursera)',
                  'DeepLearning.ai TensorFlow Developer Professional Certificate (Coursera)',
                  'Structuring Machine Learning Projects (Coursera)',
                  'Intro to Generative AI (Coursera)'
                ].map((cert, index) => (
                  <Card key={index} className="project-card">
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground">{cert}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a href="mailto:calistasalsa.cpw@gmail.com" className="flex items-center gap-2 hover:text-primary-glow transition-colors">
                <Mail className="w-4 h-4" />
                calistasalsa.cpw@gmail.com
              </a>
              <a href="tel:+6281297801340" className="flex items-center gap-2 hover:text-primary-glow transition-colors">
                <Phone className="w-4 h-4" />
                +6281297801340
              </a>
              <a href="https://www.linkedin.com/in/calistasalsabilacpw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-glow transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
          
          <Separator className="mb-6 bg-primary-light" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2025 Calista Salsabila Citra Putri Winanto. All rights reserved.
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-primary-foreground hover:text-primary-glow hover:bg-primary-light/20"
            >
              <ChevronUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;