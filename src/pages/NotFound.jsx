import { Result, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const NotFound = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f8fafc'
    }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button 
            type="primary" 
            icon={<HomeOutlined />}
            href="/"
            size="large"
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;