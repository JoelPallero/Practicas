import { useState } from 'react';

const useResultBool = () => {
  const [responses, setResponses] = useState({});
  const [resultBool, setResultBool] = useState(false);
  const [percentage, setPercentage] = useState(0);

  return { responses, setResponses, resultBool, setResultBool,  percentage, setPercentage};
};

export default useResultBool;
