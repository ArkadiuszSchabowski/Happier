const FormErrorMessage = ({ message }: { message: string }) => {
  return (
    <p className="text-center text-red-500 text-sm absolute -bottom-5 font-thin">
      {message}
    </p>
  );
};

export { FormErrorMessage };
