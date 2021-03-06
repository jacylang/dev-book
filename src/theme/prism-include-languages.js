import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import siteConfig from '@generated/docusaurus.config';

const prismIncludeLanguages = (PrismObject) => {
  if (ExecutionEnvironment.canUseDOM) {
    const {
      themeConfig: {prism = {}},
    } = siteConfig;
    const {additionalLanguages = []} = prism;
    window.Prism = PrismObject;
    additionalLanguages.forEach((lang) => {
      require(`prismjs/components/prism-${lang}`); // eslint-disable-line
    });

    require('@jacy-lang/prism-jacy');

    Prism.languages.jc = Prism.languages.jacy;

    delete window.Prism;
  }
};

export default prismIncludeLanguages;
