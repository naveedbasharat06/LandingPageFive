import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
};
export default PageNotFound;
