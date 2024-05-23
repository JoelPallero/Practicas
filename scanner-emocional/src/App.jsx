import React, { useState } from 'react';
import Result from './components/Results.jsx';
import questionsData from './services/questions.json';
import optionsData from './services/options.json';
import useVariables from './globales/useVariables.js'

function App() {

  const { responses, setResponses, resultBool, setResultBool,  percentage, setPercentage} = useVariables();

  const handleChange = (questionId, score) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [questionId]: score
    }));
  };

  const percentageResults = () => {
    // Verificar si todas las preguntas han sido respondidas
    if (Object.keys(responses).length !== questionsData.length) {
      alert("Por favor, responde todas las preguntas.");
      return;
    }
  
    // Calcular el puntaje ponderado
    const weightedScore = questionsData.reduce((acc, question) => {
      const score = responses[question.id];
      return acc + (score * question.weight);
    }, 0);
  
    // Calcular el puntaje máximo posible
    const maxScore = questionsData.reduce((acc, question) => {
      return acc + (4 * question.weight);
    }, 0);
  
    // Calcular el porcentaje y redondearlo
    let per = Math.round((weightedScore / maxScore) * 100);
    per ? setResultBool(true) : setResultBool(false)
    setPercentage(per);
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    percentageResults();  
  };
  
  
  
  return (
    <div>
      <h1>Escaner Emocional</h1>
      <p>Le pedimos que sea sumamente hoesto consigo mismo para responder, ya que esto nos va a servir para realizar una medición cuantitativa del progreso que ha tenido</p>
      {resultBool ? <Result
                      per={percentage}/> 
                  : null
      }

      <form onSubmit={handleSubmit}>
        {questionsData.map(question => (
          <Question
            key={question.id}
            question={question}
            options={optionsData}
            handleChange={handleChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>

  );
}

const Question = ({ question, options, handleChange }) => {
  return (
    <div>
      <label htmlFor={`question-${question.id}`}>
        <strong>{question.question}</strong>
        {options.map(option => (
          <div key={`${question.id}-${option.id}`}>
            <input
              type="radio"
              id={`question-${question.id}-option-${option.id}`}
              name={`question-${question.id}`}
              value={option.score}
              onChange={() => handleChange(question.id, option.score)}
            />
            <label htmlFor={`question-${question.id}-option-${option.id}`}>{option.text}</label>
          </div>
        ))}
      </label>
    </div>
  );
};

export default App;