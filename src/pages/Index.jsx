import React from 'react';
import { Layout, Typography, Card, Button, Row, Col, Tag } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const Index = () => {
  return (
    <Layout>
      <Content style={{ padding: '0 50px', background: '#fff' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          <Title level={1}>Hi, I'm Calista.</Title>
          <Title level={3}>A passionate front-end developer.</Title>
          <Paragraph>
            I create beautiful and responsive web applications.
          </Paragraph>
          <Button type="primary" size="large" href="#about">
            View my work
          </Button>
        </div>

        {/* About Section */}
        <div id="about" style={{ padding: '50px 0' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>
            About Me
          </Title>
          <Paragraph style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            I am a self-taught front-end developer with a passion for learning new technologies and building things. I have experience with React, JavaScript, and modern web development tools.
          </Paragraph>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Tag color="blue">React</Tag>
            <Tag color="green">JavaScript</Tag>
            <Tag color="purple">HTML</Tag>
            <Tag color="red">CSS</Tag>
            <Tag color="cyan">Ant Design</Tag>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" style={{ padding: '50px 0' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>
            Projects
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card title="Project One" bordered={false} extra={<a href="#">GitHub</a>}>
                This is a description of my first project. It's a really cool application that does amazing things.
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card title="Project Two" bordered={false} extra={<a href="#">GitHub</a>}>
                This is a description of my second project. It solves a common problem in a unique and interesting way.
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card title="Project Three" bordered={false} extra={<a href="#">GitHub</a>}>
                This is a description of my third project. I'm very proud of how this one turned out.
              </Card>
            </Col>
          </Row>
        </div>

        {/* Contact Section */}
        <div style={{ textAlign: 'center', padding: '50px 0' }}>
          <Title level={3}>Get In Touch</Title>
          <Button type="link" icon={<MailOutlined />} href="mailto:your.email@example.com">
            your.email@example.com
          </Button>
          <Button type="link" icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/your-profile" target="_blank">
            LinkedIn
          </Button>
          <Button type="link" icon={<GithubOutlined />} href="https://github.com/your-username" target="_blank">
            GitHub
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default Index;