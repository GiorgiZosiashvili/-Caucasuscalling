import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

const GoogleTranslate = () => {
  const mount = useRef(false);

  useEffect(() => {
    if (!mount.current) {
      // Function to initialize the Google Translate widget
      const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element',
        );
      };

      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
      window.googleTranslateElementInit = googleTranslateElementInit;
      mount.current = true;
    }
  }, []);

  return (
    <Container>
      <div id="google_translate_element"></div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  z-index: 100;
  width: 100%;
  padding: 0px 40px;
  @media screen and (max-width: 900px) {
    padding: 0px 20px;
  }
`;
export default GoogleTranslate;
