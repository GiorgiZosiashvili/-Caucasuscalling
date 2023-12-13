import { useEffect } from 'react';
import styled from 'styled-components';

const Languages = () => {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'ka,en,ru,zh-CN',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element',
        );
      } catch (e) {
        console.error('Google Translate widget failed to initialize:', e);
      }
    };

    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.type = 'text/javascript';
    googleTranslateScript.async = true;
    googleTranslateScript.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(googleTranslateScript);

    return () => {
      document.body.removeChild(googleTranslateScript);
      window.googleTranslateElementInit = undefined;
    };
  }, []);

  return (
    <Container>
      <div id="google_translate_element"></div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: right;
  padding: 0px 40px;
  z-index: 100;
  @media screen and (max-width: 885px) {
    align-items: start;
    padding-right: 0px;
  }
`;

export default Languages;
