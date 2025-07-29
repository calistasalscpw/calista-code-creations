import { useState, useEffect } from 'react';
import { 
  Button, 
  Card, 
  Tag, 
  Typography, 
  Space, 
  Row, 
  Col, 
  Divider,
  Layout,
  BackTop,
  Timeline,
  List,
  Avatar,
  Tooltip
} from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined, 
  LinkedinOutlined, 
  DownloadOutlined,
  LinkOutlined,
  GithubOutlined,
  CalendarOutlined,
  TrophyOutlined,
  BankOutlined,
  CodeOutlined,
  TeamOutlined,
  UpOutlined,
  StarOutlined,
  BookOutlined,
  ToolOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  AwardOutlined,
  BulbOutlined,
  DatabaseOutlined,
  MobileOutlined,
  DesktopOutlined,
  CloudOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Custom styles using only CSS-in-JS (no Tailwind)
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px'
  };

  const sectionStyle = {
    padding: '80px 0'
  };

  const heroSectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
    color: 'white',
    textAlign: 'center',
    position: 'relative'
  };

  const alternateBackgroundStyle = {
    backgroundColor: '#f8fafc'
  };

  const cardStyle = {
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
    height: '100%'
  };

  const cardHoverStyle = {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
  };

  const heroTitleStyle = {
    fontSize: 'clamp(48px, 8vw, 84px)',
    fontWeight: 'bold',
    marginBottom: '16px',
    lineHeight: 1.1,
    color: 'white'
  };

  const heroSubtitleStyle = {
    fontSize: 'clamp(18px, 3vw, 24px)',
    marginBottom: '32px',
    color: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '800px',
    margin: '0 auto 32px auto'
  };

  const contactInfoStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '24px',
    marginBottom: '32px'
  };

  const buttonStyle = {
    height: '48px',
    padding: '0 32px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px'
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    border: 'none',
    color: 'white'
  };

  const outlineButtonStyle = {
    ...buttonStyle,
    background: 'transparent',
    border: '2px solid white',
    color: 'white'
  };

  const footerStyle = {
    backgroundColor: '#1e293b',
    color: 'white',
    padding: '64px 0'
  };

  // Project data
  const projects = [
    {
      title: "Academic Service Chatbot Prototypes",
      role: "Machine Learning Developer", 
      date: "March 2025 - June 2025",
      description: "Engineered an NLP pipeline using LSTM, performed data augmentation, and developed a Flask web interface.",
      technologies: ["LSTM", "NLP", "Python", "Flask"],
      github: null
    },
    {
      title: "Case Study: Selena - Seller Financial Tracking App (Mobile)",
      role: "Machine Learning Cohort in Bangkit Academy",
      date: "Nov 2024 - Dec 2024", 
      description: "Conducted exploratory data analysis, built an anomaly detection model using Autoencoder, and collaborated with the cloud team for integration.",
      technologies: ["Autoencoder", "Python", "Cloud Computing"],
      github: "https://github.com/itsmaul/Selena-App"
    },
    {
      title: "Case Study: Masakuy - Recipe Website",
      role: "Full Stack Developer",
      date: "March 2024 - May 2024",
      description: "Led the full project lifecycle from UI/UX design in Figma to full-stack development using HTML, CSS, PHP, and MySQL.",
      technologies: ["Figma", "HTML", "CSS", "PHP", "MySQL"],
      github: "https://github.com/calistasalscpw/Web-Resep-Makanan"
    },
    {
      title: "Case Study: Health Monitoring Application (Mobile)",
      role: "UI/UX Designer",
      date: "March 2022 - May 2022",
      description: "Led the end-to-end design process, creating user personas, journey maps, wireframes, and a high-fidelity prototype in Figma.",
      technologies: ["Figma", "UI/UX Design principles"],
      github: null
    }
  ];

  // Skills data
  const skillsData = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "PHP"],
      color: "blue"
    },
    {
      title: "Frameworks & Libraries", 
      skills: ["React", "Node.js", "Tensorflow", "Scikit-Learn", "Numpy", "Pandas"],
      color: "green"
    },
    {
      title: "Developer Tools",
      skills: ["Visual Studio Code", "Git", "Docker (basic)", "Google Collaboratory", "Jupyter Notebook"],
      color: "orange"
    },
    {
      title: "Design & Prototyping",
      skills: ["Figma", "Miro"],
      color: "purple"
    },
    {
      title: "Databases",
      skills: ["MySQL"],
      color: "cyan"
    },
    {
      title: "Hard Skills",
      skills: ["Machine Learning", "Data Analysis", "Web Development", "UI/UX Design"],
      color: "red"
    },
    {
      title: "Soft Skills", 
      skills: ["Communication", "Adaptation", "Critical Thinking", "Problem-Solving", "Self-Management", "Time-Management", "Project-Management"],
      color: "magenta"
    }
  ];

  // Certifications data
  const certifications = [
    "Google IT Automation with Python (Coursera)",
    "TensorFlow: Advanced Techniques Specialization (Coursera)", 
    "Belajar Analisis Data dengan Python (Dicoding)",
    "Mathematics for Machine Learning and Data Science Specialization (Coursera)",
    "Build Basic Generative Adversarial Networks (Coursera)",
    "Tensorflow Data and Deployment (Coursera)",
    "Machine Learning Specialization (Coursera)",
    "Deeplearning.ai TensorFlow Developer Professional Certificate (Coursera)",
    "Structuring Machine Learning Projects (Coursera)",
    "Intro to Generative AI (Coursera)"
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content>
        {/* Hero Section */}
        <section style={heroSectionStyle}>
          <div style={containerStyle}>
            <div style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s ease-out'
            }}>
              <Title level={1} style={heroTitleStyle}>
                Calista Salsabila<br />
                <span style={{ color: '#60a5fa' }}>Citra Putri Winanto</span>
              </Title>
              
              <Paragraph style={heroSubtitleStyle}>
                Informatics Student with a Passion for Machine Learning and UI/UX Design
              </Paragraph>
              
              {/* Contact Info */}
              <div style={contactInfoStyle}>
                <Space>
                  <MailOutlined />
                  <Text style={{ color: 'white' }}>calistasalsa.cpw@gmail.com</Text>
                </Space>
                <Space>
                  <PhoneOutlined />
                  <Text style={{ color: 'white' }}>+6281297801340</Text>
                </Space>
                <Space>
                  <EnvironmentOutlined />
                  <Text style={{ color: 'white' }}>Bogor, Indonesia</Text>
                </Space>
              </div>

              {/* CTA Buttons */}
              <Space size="large" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button 
                  size="large" 
                  style={primaryButtonStyle}
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects
                </Button>
                <Button 
                  size="large" 
                  style={outlineButtonStyle}
                  icon={<DownloadOutlined />}
                >
                  Download CV
                </Button>
                <Button
                  size="large"
                  style={outlineButtonStyle}
                  icon={<LinkedinOutlined />}
                  href="https://www.linkedin.com/in/calistasalsabilacpw"
                  target="_blank"
                >
                  LinkedIn
                </Button>
              </Space>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section style={{ ...sectionStyle, ...alternateBackgroundStyle }}>
          <div style={containerStyle}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', color: '#1e293b' }}>
              About Me
            </Title>
            <Row justify="center">
              <Col xs={24} lg={20} xl={16}>
                <Card style={cardStyle}>
                  <Paragraph style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '24px' }}>
                    As a final-year Informatics student at Universitas Singaperbangsa Karawang, I'm passionate about the intersection of technology and creativity, particularly in Machine Learning and UI/UX design. My academic journey has been enriched by a transformative one-semester exchange program that enhanced my problem-solving abilities, critical thinking skills, and adaptability in diverse environments.
                  </Paragraph>
                  <Paragraph style={{ fontSize: '18px', lineHeight: '1.6' }}>
                    I'm proficient in cutting-edge tools including Figma for design prototyping, VS Code for development, and Google Collaboratory for machine learning projects. My experience spans from developing NLP chatbot systems to creating comprehensive UI/UX designs, always with a focus on user-centered solutions and innovative technology applications.
                  </Paragraph>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={sectionStyle}>
          <div style={containerStyle}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', color: '#1e293b' }}>
              My Projects
            </Title>
            <Row gutter={[32, 32]}>
              {projects.map((project, index) => (
                <Col xs={24} lg={12} key={index}>
                  <Card 
                    style={cardStyle}
                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
                  >
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                        <Title level={4} style={{ color: '#1e293b', margin: 0, flex: 1 }}>
                          {project.title}
                        </Title>
                        <Tag color="blue">{project.date}</Tag>
                      </div>
                      <Text style={{ color: '#3730a3', fontWeight: '500' }}>{project.role}</Text>
                    </div>
                    
                    <Paragraph style={{ marginBottom: '16px', color: '#64748b' }}>
                      {project.description}
                    </Paragraph>
                    
                    <Space wrap style={{ marginBottom: project.github ? '16px' : '0' }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Tag key={techIndex}>{tech}</Tag>
                      ))}
                    </Space>
                    
                    {project.github && (
                      <Button 
                        icon={<GithubOutlined />}
                        href={project.github}
                        target="_blank"
                        style={{ borderColor: '#1e293b', color: '#1e293b' }}
                      >
                        View on GitHub
                      </Button>
                    )}
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Education Section */}
        <section style={{ ...sectionStyle, ...alternateBackgroundStyle }}>
          <div style={containerStyle}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', color: '#1e293b' }}>
              Education
            </Title>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                
                <Card style={cardStyle}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                      <BankOutlined style={{ fontSize: '32px', color: '#1e293b' }} />
                      <div>
                        <Title level={4} style={{ color: '#1e293b', margin: 0 }}>
                          Universitas Singaperbangsa Karawang
                        </Title>
                        <Text style={{ fontSize: '16px' }}>Informatics, Computer Science</Text>
                      </div>
                    </div>
                    <Tag color="blue">September 2021 - June 2025</Tag>
                  </div>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      <Text strong style={{ color: '#1e293b', display: 'block', marginBottom: '8px' }}>
                        GPA: 3.99/4.00
                      </Text>
                      <Text style={{ color: '#64748b' }}>
                        Outstanding academic performance with focus on machine learning and software development.
                      </Text>
                    </Col>
                    <Col xs={24} md={12}>
                      <Text strong style={{ color: '#1e293b', display: 'block', marginBottom: '8px' }}>
                        Key Achievements:
                      </Text>
                      <div style={{ color: '#64748b' }}>
                        <div>• Awarded the Indonesian International Student Mobility Awards (IISMA) 2023 scholarship</div>
                        <div>• Led a UI/UX Design project for an HCI course and achieved the maximum score</div>
                      </div>
                    </Col>
                  </Row>
                </Card>

                <Card style={cardStyle}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                      <BankOutlined style={{ fontSize: '32px', color: '#1e293b' }} />
                      <div>
                        <Title level={4} style={{ color: '#1e293b', margin: 0 }}>
                          University of Padua
                        </Title>
                        <Text style={{ fontSize: '16px' }}>IISMA Exchange Program, Computer Science</Text>
                      </div>
                    </div>
                    <Tag color="blue">September 2023 - February 2024</Tag>
                  </div>
                  <Paragraph style={{ color: '#64748b', marginBottom: '16px' }}>
                    Enhanced adaptability and critical thinking in an international academic setting. Gained experience with new software tools in a Linux environment (IDA, Docker). Demonstrated strong time management skills.
                  </Paragraph>
                </Card>

              </Space>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', color: '#1e293b' }}>
              Organizational Experience & Volunteering
            </Title>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                
                <Card style={cardStyle}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                      <TeamOutlined style={{ fontSize: '32px', color: '#1e293b' }} />
                      <div>
                        <Title level={4} style={{ color: '#1e293b', margin: 0 }}>
                          Google Developer Student Club Chapter Unsika
                        </Title>
                        <Text style={{ fontSize: '16px' }}>Media and Creative Staff</Text>
                      </div>
                    </div>
                    <Tag color="blue">August 2022 - August 2023</Tag>
                  </div>
                  <div style={{ color: '#64748b' }}>
                    <div>• Designed merchandise stickers</div>
                    <div>• Created over 25 publications for social media</div>
                  </div>
                </Card>

                <Card style={cardStyle}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                      <TeamOutlined style={{ fontSize: '32px', color: '#1e293b' }} />
                      <div>
                        <Title level={4} style={{ color: '#1e293b', margin: 0 }}>
                          Himpunan Mahasiswa Teknik Informatika
                        </Title>
                        <Text style={{ fontSize: '16px' }}>Member of Information and Communication Division</Text>
                      </div>
                    </div>
                    <Tag color="blue">December 2021 - November 2022</Tag>
                  </div>
                  <div style={{ color: '#64748b' }}>
                    <div>• Enhanced Instagram interaction with biweekly quizzes</div>
                    <div>• Increased Instagram profile visits by up to 242% through content creation</div>
                    <div>• Provided over 50 visual publications for various programs</div>
                  </div>
                </Card>

              </Space>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section style={{ ...sectionStyle, ...alternateBackgroundStyle }}>
          <div style={containerStyle}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', color: '#1e293b' }}>
              Skills
            </Title>
            <Row gutter={[24, 24]}>
              {skillsData.map((skillCategory, index) => (
                <Col xs={24} md={12} lg={8} key={index}>
                  <Card style={cardStyle}>
                    <Title level={4} style={{ color: '#1e293b', marginBottom: '16px' }}>
                      {skillCategory.title}
                    </Title>
                    <Space wrap>
                      {skillCategory.skills.map((skill, skillIndex) => (
                        <Tag color={skillCategory.color} key={skillIndex}>
                          {skill}
                        </Tag>
                      ))}
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
            
            {/* Languages */}
            <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
              <Col xs={24} md={12}>
                <Card style={cardStyle}>
                  <Title level={4} style={{ color: '#1e293b', marginBottom: '16px' }}>
                    Languages
                  </Title>
                  <Space wrap>
                    <Tag color="gold">Indonesian (Native)</Tag>
                    <Tag color="gold">English (TOEFL ITP: 610)</Tag>
                  </Space>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Achievements & Certifications Section */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', color: '#1e293b' }}>
              Achievements & Certifications
            </Title>
            <Row gutter={[32, 32]}>
              <Col xs={24} lg={12}>
                <Card style={cardStyle}>
                  <Title level={4} style={{ color: '#1e293b', marginBottom: '24px' }}>
                    <TrophyOutlined style={{ marginRight: '8px' }} />
                    Achievements
                  </Title>
                  <List
                    dataSource={[
                      "Cohort of Korea-ASEAN Academy (current)",
                      "Machine Learning Cohort at Bangkit Academy", 
                      "Awardee of Indonesian International Student Mobility Awards (IISMA)"
                    ]}
                    renderItem={(item) => (
                      <List.Item>
                        <CheckCircleOutlined style={{ color: '#10b981', marginRight: '8px' }} />
                        {item}
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card style={cardStyle}>
                  <Title level={4} style={{ color: '#1e293b', marginBottom: '24px' }}>
                    <AwardOutlined style={{ marginRight: '8px' }} />
                    Certifications
                  </Title>
                  <List
                    dataSource={certifications}
                    renderItem={(item) => (
                      <List.Item style={{ fontSize: '14px' }}>
                        <CheckCircleOutlined style={{ color: '#3b82f6', marginRight: '8px' }} />
                        {item}
                      </List.Item>
                    )}
                    style={{ maxHeight: '300px', overflow: 'auto' }}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Footer */}
        <footer style={footerStyle}>
          <div style={containerStyle}>
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} md={16}>
                <Title level={3} style={{ color: 'white', marginBottom: '24px' }}>
                  Let's Connect
                </Title>
                <Space direction="vertical" size="middle">
                  <Space>
                    <MailOutlined />
                    <Text style={{ color: 'white' }}>calistasalsa.cpw@gmail.com</Text>
                  </Space>
                  <Space>
                    <PhoneOutlined />
                    <Text style={{ color: 'white' }}>+6281297801340</Text>
                  </Space>
                  <Space>
                    <EnvironmentOutlined />
                    <Text style={{ color: 'white' }}>Bogor, Indonesia</Text>
                  </Space>
                  <Space>
                    <LinkedinOutlined />
                    <a 
                      href="https://www.linkedin.com/in/calistasalsabilacpw" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: '#60a5fa' }}
                    >
                      LinkedIn Profile
                    </a>
                  </Space>
                </Space>
              </Col>
              <Col xs={24} md={8} style={{ textAlign: 'center' }}>
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                  © 2025 Calista Salsabila Citra Putri Winanto
                </Text>
              </Col>
            </Row>
          </div>
        </footer>

        {/* Back to Top */}
        <BackTop>
          <div style={{
            height: '48px',
            width: '48px',
            lineHeight: '48px',
            borderRadius: '50%',
            backgroundColor: '#3b82f6',
            color: 'white',
            textAlign: 'center',
            fontSize: '18px'
          }}>
            <UpOutlined />
          </div>
        </BackTop>
      </Content>
    </Layout>
  );
};

export default Portfolio;