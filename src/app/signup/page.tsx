import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import AuthForm from "@/components/AuthForm";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center mt-20 flex-1">
      <Card className="w-full max-w-md ">
        <CardHeader className="mb-4">
          <CardTitle className="text-center text-3xl">Signup</CardTitle>
        </CardHeader>
        <AuthForm types="signup" />
      </Card>
    </div>
  );
};
export default SignupPage;
