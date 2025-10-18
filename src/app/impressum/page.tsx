import TextSection from "@/components/ui/organisms/marketing/TextSection/TextSection";
import { Text, Headline, InlineLink, HiddenHeadline } from "@/components/ui/atoms/typography";
import ArticleContainer from "@/components/ui/molecules/Reading/ArticleContainer";

export default function ImpressumPage() {
  return (
      <TextSection
        id="impressum"
        title="Impressum"
        description="Angaben gemäß § 5 TMG"
      >
      <HiddenHeadline
        text="Impressum – Verosoma"
        id="Verosoma-Impressum-heading"
       />
       <ArticleContainer>
        <Headline level="h2" size="md" >Impressum</Headline>

        <Text>
          Paul Kaiser<br />
          Paul Kaiser &ndash; FIPRIFIN (First Principle Finance)<br />
          Oberer Weiler 3<br />
          71577 Großerlach
        </Text>

        <Headline level="h2" size="md" >Kontakt</Headline>
        <Text>
          Telefon: <InlineLink href="tel:01739069171">0173&nbsp;9069171</InlineLink><br />
          E-Mail:{" "}
          <InlineLink href="mailto:Admin@fiprifin.com">Admin@fiprifin.com</InlineLink>
        </Text>

        <Headline level="h2" size="md" >Verbraucher&shy;streit&shy;beilegung / Universal&shy;schlichtungs&shy;stelle</Headline>
        <Text>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </Text>

        <Headline level="h2" size="md" >Zentrale Kontaktstelle nach dem Digital Services Act (DSA)</Headline>
        <Text>
          Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA erreichen Sie wie folgt:
        </Text>
        <Text>
          E-Mail: <InlineLink href="mailto:Admin@fiprifin.com">Admin@fiprifin.com</InlineLink><br />
          Telefon: <InlineLink href="tel:01739069171">0173&nbsp;9069171</InlineLink>
        </Text>
        <Text>Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch, Englisch.</Text>

        <Text>
          Quelle:{" "}
          <InlineLink href="https://www.e-recht24.de" variant="light-accent">
            eRecht24
          </InlineLink>
        </Text>
        </ArticleContainer>
      </TextSection>
  );
}
