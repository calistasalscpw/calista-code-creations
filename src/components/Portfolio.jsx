import { useState, useEffect } from 'react';
import { Button, Card, Tag, Divider, Typography, Space, Row, Col } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined, 
  LinkedinOutlined, 
  DownloadOutlined,
  ExternalLinkOutlined,
  GithubOutlined,
  CalendarOutlined,
  TrophyOutlined,
  BankOutlined,
  CodeOutlined,
  TeamOutlined,
  UpOutlined
} from '@ant-design/icons';
import heroImage from '@/assets/hero-bg.jpg';

const { Title, Paragraph, Text } = Typography;

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const customCardStyle = {
    background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(210 40% 98%))',
    borderColor: 'hsl(214.3 31.8% 91.4% / 0.5)',
    boxShadow: '0 8px 30px -8px hsl(215 100% 15% / 0.12)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: '16px'
  };

  const heroButtonStyle = {
    background: 'linear-gradient(135deg, hsl(215 100% 15%), hsl(215 100% 25%))',
    color: 'white',
    border: 'none',
    boxShadow: '0 20px 40px -12px hsl(215 100% 15% / 0.15)',
    fontWeight: '600',
    height: '48px',
    padding: '0 32px',
    fontSize: '16px'
  };

  const outlineHeroButtonStyle = {
    border: '2px solid hsl(215 100% 15%)',
    color: 'hsl(215 100% 15%)',
    background: 'transparent',
    fontWeight: '600',
    height: '48px',
    padding: '0 32px',
    fontSize: '16px'
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'hsl(0 0% 100%)' }}>
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
          <div className="absolute inset-0" style={{ backgroundColor: 'hsl(215 100% 15% / 0.8)' }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Title level={1} style={{ 
              color: 'white', 
              fontSize: 'clamp(48px, 8vw, 112px)', 
              fontWeight: 'bold', 
              marginBottom: '16px',
              lineHeight: 1.1
            }}>
              Calista Salsabila<br />
              <span style={{ color: 'hsl(215 100% 35%)' }}>Citra Putri Winanto</span>
            </Title>
            <Paragraph style={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              fontSize: 'clamp(18px, 3vw, 24px)', 
              marginBottom: '32px',
              maxWidth: '768px',
              margin: '0 auto 32px auto'
            }}>
              Fresh Graduate Informatics with a Passion for Machine Learning and UI/UX Design
            </Paragraph>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
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
            <Space size="middle" wrap className="justify-center">
              <Button 
                size="large" 
                style={heroButtonStyle}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 0 40px hsl(215 100% 35% / 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 20px 40px -12px hsl(215 100% 15% / 0.15)';
                }}
              >
                View Projects
              </Button>
              <Button 
                size="large" 
                style={outlineHeroButtonStyle}
                icon={<DownloadOutlined />}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'hsl(215 100% 15%)';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'hsl(215 100% 15%)';
                }}
              >
                Download CV
              </Button>
              <Button
                size="large"
                ghost
                style={{
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  height: '48px',
                  padding: '0 32px',
                  fontSize: '16px'
                }}
                icon={<LinkedinOutlined />}
                href="https://www.linkedin.com/in/calistasalsabilacpw"
                target="_blank"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.color = 'hsl(215 100% 35%)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                LinkedIn
              </Button>
            </Space>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20" style={{ backgroundColor: 'hsl(210 40% 96% / 0.3)' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Title level={2} style={{ color: 'hsl(215 100% 15%)', marginBottom: '32px' }}>About Me</Title>
            <Card style={customCardStyle}>
              <Paragraph style={{ 
                fontSize: '18px', 
                lineHeight: '1.6', 
                color: 'hsl(215.4 16.3% 46.9%)', 
                marginBottom: '24px' 
              }}>
                As a final-year Informatics student at Universitas Singaperbangsa Karawang, I'm passionate about the intersection of technology and creativity, particularly in Machine Learning and UI/UX design. My academic journey has been enriched by a transformative one-semester exchange program that enhanced my problem-solving abilities, critical thinking skills, and adaptability in diverse environments.
              </Paragraph>
              <Paragraph style={{ 
                fontSize: '18px', 
                lineHeight: '1.6', 
                color: 'hsl(215.4 16.3% 46.9%)' 
              }}>
                I'm proficient in cutting-edge tools including Figma for design prototyping, VS Code for development, and Google Collaboratory for machine learning projects. My experience spans from developing NLP chatbot systems to creating comprehensive UI/UX designs, always with a focus on user-centered solutions and innovative technology applications.
              </Paragraph>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', color: 'hsl(215 100% 15%)' }}>My Projects</Title>
          <Row gutter={[32, 32]}>
            
            {/* Academic Service Chatbot */}
            <Col xs={24} lg={12}>
              <Card 
                style={{ 
                  ...customCardStyle, 
                  height: '100%',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -12px hsl(215 100% 15% / 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 30px -8px hsl(215 100% 15% / 0.12)';
                }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Title level={4} style={{ color: 'hsl(215 100% 15%)', margin: 0 }}>Academic Service Chatbot Prototypes</Title>
                    <Tag color="blue">March 2025 - June 2025</Tag>
                  </div>
                  <Text style={{ color: 'hsl(215 100% 25%)', fontWeight: '500' }}>Machine Learning Developer</Text>
                </div>
                <Paragraph style={{ color: 'hsl(215.4 16.3% 46.9%)', marginBottom: '16px' }}>
                  Engineered an advanced NLP pipeline using Long Short-Term Memory (LSTM) models to power chatbot responses for university academic services. Implemented data augmentation techniques and developed a user-friendly Flask web interface for real-time student interaction.
                </Paragraph>
                <Space wrap style={{ marginBottom: '16px' }}>
                  <Tag>LSTM</Tag>
                  <Tag>NLP</Tag>
                  <Tag>Python</Tag>
                  <Tag>Flask</Tag>
                </Space>
              </Card>
            </Col>

            {/* Selena App */}
            <Col xs={24} lg={12}>
              <Card 
                style={{ 
                  ...customCardStyle, 
                  height: '100%',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -12px hsl(215 100% 15% / 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 30px -8px hsl(215 100% 15% / 0.12)';
                }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Title level={4} style={{ color: 'hsl(215 100% 15%)', margin: 0 }}>Selena - Seller Financial Tracking App</Title>
                    <Tag color="blue">Nov 2024 - Dec 2024</Tag>
                  </div>
                  <Text style={{ color: 'hsl(215 100% 25%)', fontWeight: '500' }}>Machine Learning Cohort at Bangkit Academy</Text>
                </div>
                <Paragraph style={{ color: 'hsl(215.4 16.3% 46.9%)', marginBottom: '16px' }}>
                  Conducted comprehensive exploratory data analysis on financial datasets and built an anomaly detection model using Autoencoder neural networks. Collaborated with cloud computing team to integrate the model into a scalable mobile application architecture.
                </Paragraph>
                <Space wrap style={{ marginBottom: '16px' }}>
                  <Tag>Autoencoder</Tag>
                  <Tag>Python</Tag>
                  <Tag>Cloud Computing</Tag>
                  <Tag>Data Analysis</Tag>
                </Space>
                <Button 
                  icon={<GithubOutlined />}
                  href="https://github.com/itsmaul/Selena-App"
                  target="_blank"
                  style={{ border: '1px solid hsl(215 100% 15%)', color: 'hsl(215 100% 15%)' }}
                >
                  View on GitHub
                </Button>
              </Card>
            </Col>

            {/* Masakuy Website */}
            <Col xs={24} lg={12}>
              <Card 
                style={{ 
                  ...customCardStyle, 
                  height: '100%',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -12px hsl(215 100% 15% / 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 30px -8px hsl(215 100% 15% / 0.12)';
                }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Title level={4} style={{ color: 'hsl(215 100% 15%)', margin: 0 }}>Masakuy - Recipe Website</Title>
                    <Tag color="blue">March 2024 - May 2024</Tag>
                  </div>
                  <Text style={{ color: 'hsl(215 100% 25%)', fontWeight: '500' }}>Full Stack Developer</Text>
                </div>
                <Paragraph style={{ color: 'hsl(215.4 16.3% 46.9%)', marginBottom: '16px' }}>
                  Led the complete project lifecycle from initial UI/UX design in Figma to full-stack development. Created a responsive recipe sharing platform using modern web technologies with robust database management and user authentication features.
                </Paragraph>
                <Space wrap style={{ marginBottom: '16px' }}>
                  <Tag>Figma</Tag>
                  <Tag>HTML</Tag>
                  <Tag>CSS</Tag>
                  <Tag>PHP</Tag>
                  <Tag>MySQL</Tag>
                </Space>
                <Button 
                  icon={<GithubOutlined />}
                  href="https://github.com/calistasalscpw/Web-Resep-Makanan"
                  target="_blank"
                  style={{ border: '1px solid hsl(215 100% 15%)', color: 'hsl(215 100% 15%)' }}
                >
                  View on GitHub
                </Button>
              </Card>
            </Col>

            {/* Health Monitoring App */}
            <Col xs={24} lg={12}>
              <Card 
                style={{ 
                  ...customCardStyle, 
                  height: '100%',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -12px hsl(215 100% 15% / 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 30px -8px hsl(215 100% 15% / 0.12)';
                }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Title level={4} style={{ color: 'hsl(215 100% 15%)', margin: 0 }}>Health Monitoring Application</Title>
                    <Tag color="blue">March 2022 - May 2022</Tag>
                  </div>
                  <Text style={{ color: 'hsl(215 100% 25%)', fontWeight: '500' }}>UI/UX Designer</Text>
                </div>
                <Paragraph style={{ color: 'hsl(215.4 16.3% 46.9%)', marginBottom: '16px' }}>
                  Led the end-to-end design process during the COVID-19 pandemic, creating comprehensive user personas, journey maps, and wireframes. Developed a high-fidelity interactive prototype in Figma focusing on accessibility and user-centered design principles.
                </Paragraph>
                <Space wrap>
                  <Tag>Figma</Tag>
                  <Tag>UI/UX Design</Tag>
                  <Tag>Prototyping</Tag>
                  <Tag>User Research</Tag>
                </Space>
              </Card>
            </Col>

          </Row>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20" style={{ backgroundColor: 'hsl(210 40% 96% / 0.3)' }}>
        <div className="container mx-auto px-6">
          <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', color: 'hsl(215 100% 15%)' }}>Education</Title>
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card style={customCardStyle}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <BankOutlined style={{ fontSize: '32px', color: 'hsl(215 100% 15%)' }} />
                  <div>
                    <Title level={4} style={{ color: 'hsl(215 100% 15%)', margin: 0 }}>Universitas Singaperbangsa Karawang</Title>
                    <Text style={{ fontSize: '16px' }}>Informatics, Computer Science</Text>
                  </div>
                </div>
                <Tag color="blue">September 2021 - June 2025</Tag>
              </div>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Text strong style={{ color: 'hsl(215 100% 15%)', display: 'block', marginBottom: '8px' }}>GPA: 3.99/4.00</Text>
                  <Text style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>Outstanding academic performance with focus on machine learning and software development.</Text>
                </Col>
                <Col xs={24} md={12}>
                  <Text strong style={{ color: 'hsl(215 100% 15%)', display: 'block', marginBottom: '8px' }}>Key Achievements:</Text>
                  <div style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>
                    <div>• IISMA 2023 scholarship recipient</div>
                    <div>• Maximum score in HCI UI/UX project</div>
                  </div>
                </Col>
              </Row>
            </Card>

            <Card style={customCardStyle}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <BankOutlined style={{ fontSize: '32px', color: 'hsl(215 100% 15%)' }} />
                  <div>
                    <Title level={4} style={{ color: 'hsl(215 100% 15%)', margin: 0 }}>University of Padua</Title>
                    <Text style={{ fontSize: '16px' }}>IISMA Exchange Program, Computer Science</Text>
                  </div>
                </div>
                <Tag color="blue">September 2023 - February 2024</Tag>
              </div>
              <Paragraph style={{ color: 'hsl(215.4 16.3% 46.9%)', marginBottom: '16px' }}>
                Enhanced adaptability and critical thinking in an international academic setting. Gained hands-on experience with new software tools in Linux environments, including IDA and Docker.
              </Paragraph>
              <Text strong style={{ color: 'hsl(215 100% 15%)', display: 'block', marginBottom: '8px' }}>Key Skills Developed:</Text>
              <div style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>
                <div>• International collaboration and communication</div>
                <div>• Advanced time management in multicultural environment</div>
                <div>• Technical proficiency in Linux-based development tools</div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', color: 'hsl(215 100% 15%)' }}>Experience & Volunteering</Title>
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card style={customCardStyle}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <TeamOutlined style={{ fontSize: '32px', color: 'hsl(215 100% 15%)' }} />
                  <div>
                    <Title level={4} style={{ color: 'hsl(215 100% 15%)', margin: 0 }}>Google Developer Student Club Chapter Unsika</Title>
                    <Text style={{ fontSize: '16px' }}>Media and Creative Staff</Text>
                  </div>
                </div>
                <Tag color="blue">August 2022 - August 2023</Tag>
              </div>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Text strong style={{ color: 'hsl(215 100% 15%)', display: 'block', marginBottom: '8px' }}>Key Contributions:</Text>
                  <div style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>
                    <div>• Designed merchandise stickers for club members</div>
                    <div>• Created 25+ social media publications</div>
                    <div>• Enhanced club's visual brand identity</div>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <Text style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>
                    Contributed to the growth of the local developer community through creative design work and strategic social media content creation.
                  </Text>
                </Col>
              </Row>
            </Card>

            <Card style={customCardStyle}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <TeamOutlined style={{ fontSize: '32px', color: 'hsl(215 100% 15%)' }} />
                  <div>
                    <Title level={4} style={{ color: 'hsl(215 100% 15%)', margin: 0 }}>Himpunan Mahasiswa Teknik Informatika</Title>
                    <Text style={{ fontSize: '16px' }}>Information and Communication Division</Text>
                  </div>
                </div>
                <Tag color="blue">December 2021 - November 2022</Tag>
              </div>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Text strong style={{ color: 'hsl(215 100% 15%)', display: 'block', marginBottom: '8px' }}>Impact Metrics:</Text>
                  <div style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>
                    <div>• 242% increase in Instagram profile visits</div>
                    <div>• 50+ visual publications created</div>
                    <div>• Biweekly interactive quiz programs</div>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <Text style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>
                    Dramatically improved student organization's online presence through strategic content creation and community engagement initiatives.
                  </Text>
                </Col>
              </Row>
            </Card>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20" style={{ backgroundColor: 'hsl(210 40% 96% / 0.3)' }}>
        <div className="container mx-auto px-6">
          <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', color: 'hsl(215 100% 15%)' }}>Skills</Title>
          <div className="max-w-6xl mx-auto">
            <Row gutter={[32, 32]}>
              <Col xs={24} md={12} lg={8}>
                <Card style={customCardStyle}>
                  <Title level={4} style={{ color: 'hsl(215 100% 15%)', marginBottom: '16px' }}>Programming Languages</Title>
                  <Space wrap>
                    <Tag color="blue">Python</Tag>
                    <Tag color="blue">C++</Tag>
                    <Tag color="blue">Java</Tag>
                    <Tag color="blue">JavaScript</Tag>
                    <Tag color="blue">PHP</Tag>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <Card style={customCardStyle}>
                  <Title level={4} style={{ color: 'hsl(215 100% 15%)', marginBottom: '16px' }}>Frameworks & Libraries</Title>
                  <Space wrap>
                    <Tag color="green">React</Tag>
                    <Tag color="green">Node.js</Tag>
                    <Tag color="green">TensorFlow</Tag>
                    <Tag color="green">Scikit-Learn</Tag>
                    <Tag color="green">NumPy</Tag>
                    <Tag color="green">Pandas</Tag>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <Card style={customCardStyle}>
                  <Title level={4} style={{ color: 'hsl(215 100% 15%)', marginBottom: '16px' }}>Developer Tools</Title>
                  <Space wrap>
                    <Tag color="orange">VS Code</Tag>
                    <Tag color="orange">Git</Tag>
                    <Tag color="orange">Docker</Tag>
                    <Tag color="orange">Google Colab</Tag>
                    <Tag color="orange">Jupyter</Tag>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <Card style={customCardStyle}>
                  <Title level={4} style={{ color: 'hsl(215 100% 15%)', marginBottom: '16px' }}>Design & Prototyping</Title>
                  <Space wrap>
                    <Tag color="purple">Figma</Tag>
                    <Tag color="purple">Miro</Tag>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <Card style={customCardStyle}>
                  <Title level={4} style={{ color: 'hsl(215 100% 15%)', marginBottom: '16px' }}>Hard Skills</Title>
                  <Space wrap>
                    <Tag color="red">Machine Learning</Tag>
                    <Tag color="red">Data Analysis</Tag>
                    <Tag color="red">Web Development</Tag>
                    <Tag color="red">UI/UX Design</Tag>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <Card style={customCardStyle}>
                  <Title level={4} style={{ color: 'hsl(215 100% 15%)', marginBottom: '16px' }}>Soft Skills</Title>
                  <Space wrap>
                    <Tag color="cyan">Communication</Tag>
                    <Tag color="cyan">Adaptation</Tag>
                    <Tag color="cyan">Critical Thinking</Tag>
                    <Tag color="cyan">Problem-Solving</Tag>
                    <Tag color="cyan">Time Management</Tag>
                  </Space>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', color: 'hsl(215 100% 15%)' }}>Achievements & Certifications</Title>
          <div className="max-w-6xl mx-auto">
            <Row gutter={[32, 32]}>
              <Col xs={24} lg={12}>
                <Card style={customCardStyle}>
                  <Title level={4} style={{ color: 'hsl(215 100% 15%)', marginBottom: '16px' }}>
                    <TrophyOutlined style={{ marginRight: '8px' }} />
                    Key Achievements
                  </Title>
                  <div style={{ color: 'hsl(215.4 16.3% 46.9%)' }}>
                    <div style={{ marginBottom: '8px' }}>• Cohort of Korea-ASEAN Academy (current)</div>
                    <div style={{ marginBottom: '8px' }}>• Machine Learning Cohort at Bangkit Academy</div>
                    <div>• Awardee of Indonesian International Student Mobility Awards (IISMA)</div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card style={customCardStyle}>
                  <Title level={4} style={{ color: 'hsl(215 100% 15%)', marginBottom: '16px' }}>
                    <CodeOutlined style={{ marginRight: '8px' }} />
                    Professional Certifications
                  </Title>
                  <div style={{ color: 'hsl(215.4 16.3% 46.9%)', fontSize: '14px' }}>
                    <div style={{ marginBottom: '4px' }}>• Google IT Automation with Python (Coursera)</div>
                    <div style={{ marginBottom: '4px' }}>• TensorFlow: Advanced Techniques Specialization (Coursera)</div>
                    <div style={{ marginBottom: '4px' }}>• Belajar Analisis Data dengan Python (Dicoding)</div>
                    <div style={{ marginBottom: '4px' }}>• Mathematics for Machine Learning and Data Science (Coursera)</div>
                    <div style={{ marginBottom: '4px' }}>• Build Basic Generative Adversarial Networks (Coursera)</div>
                    <div style={{ marginBottom: '4px' }}>• TensorFlow Data and Deployment (Coursera)</div>
                    <div style={{ marginBottom: '4px' }}>• Machine Learning Specialization (Coursera)</div>
                    <div style={{ marginBottom: '4px' }}>• TensorFlow Developer Professional Certificate (Coursera)</div>
                    <div style={{ marginBottom: '4px' }}>• Structuring Machine Learning Projects (Coursera)</div>
                    <div>• Intro to Generative AI (Coursera)</div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ backgroundColor: 'hsl(215 100% 15%)', color: 'white' }}>
        <div className="container mx-auto px-6">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={16}>
              <Title level={3} style={{ color: 'white', marginBottom: '16px' }}>Let's Connect</Title>
              <Space direction="vertical" size="small">
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
                  <a href="https://www.linkedin.com/in/calistasalsabilacpw" target="_blank" rel="noopener noreferrer" style={{ color: 'hsl(215 100% 35%)' }}>
                    LinkedIn Profile
                  </a>
                </Space>
              </Space>
            </Col>
            <Col xs={24} md={8} style={{ textAlign: 'right' }}>
              <Button 
                type="primary" 
                shape="circle" 
                size="large" 
                icon={<UpOutlined />}
                onClick={scrollToTop}
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  marginBottom: '16px'
                }}
              />
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                © 2025 Calista Salsabila Citra Putri Winanto
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;