import './index.scss'

const AnimatedLetters = ({ letterClass, str, idx }) => {
  const words = str.split(' ');  // split string into words
  return (
    <span>
      {
        words.map((word, i) => (
          // map each word into array of animated characters
          // add space at the end of each word except the last one
          <span style={{ whiteSpace: 'nowrap' }}>
            {word.split('').map((char, j) => (
              <span key={char + j} className={`${letterClass} _${j + i*word.length + idx}`}>
                {char}
              </span>
            ))}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))
      }
    </span>
  )
};

export default AnimatedLetters
