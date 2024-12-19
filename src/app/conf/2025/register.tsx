import { InfoGrid } from "../_components/info-grid"

export function Register() {
  return (
    <section>
      <InfoGrid
        id="register"
        title="Register"
        subtitle="Join a diverse community of GraphQL developers, architects, and enthusiasts while experiencing premium content and networking opportunities in a vendor-neutral environment."
        listItems={[
          {
            title: "Corporate",
            description:
              "The Corporate Registration type is for registrants whose company is paying for their attendance. This includes for-profit companies. You will help keep the conference affordable for everyone, especially students and those needing financial aid.",
          },
          {
            title: "Individuals",
            description:
              "The Individual Registration type is for registrants who are currently not working for a company, work for a non-profit or research institution or are attending at their own expense. You will receive confirmation within five business days of registering if your individual registration is approved or needs additional information.",
          },
          {
            title: "Academics",
            description: `Academics registrations are for current full-time students and faculty members. Full-time faculty and students will need to upload a valid copy of their Faculty or Student ID when registering. If you have any questions, please email <a href="mailto:graphql_events@linuxfoundation.org">graphql_events@linuxfoundation.org</a>`,
          },
          {
            title: "Speakers",
            description: `You should have received a registration link in your acceptance email. If you did not, please contact <a href="mailto:cfp@linuxfoundation.org">cfp@linuxfoundation.org</a> for more details.`,
          },
          {
            title: "Sponsors",
            description: `A registration link was shared in an email to your company's sponsorship contact. Please reach out to your company’s sponsorship contact if you need to register as a Sponsor. For further questions, please email <a href="mailto:events@linuxfoundation.org.">events@linuxfoundation.org.</a>`,
          },
        ]}
      />

      <div className="flex justify-center mt-8">
        <a
          href="https://cvent.me/PBNYEe?utm_source=graphql_conf_2025&utm_medium=website&utm_campaign=register_section"
          target="_blank"
          rel="noreferrer"
          className="px-20 md:px-28 py-4 text-center text-3xl font-semibold bg-primary/85 hover:bg-primary/100 transition-colors"
        >
          Get Tickets
        </a>
      </div>
    </section>
  )
}
