import { ReactNode } from "react";

export interface LaborLawItemType {
  id: string;
  title: string;
  content: ReactNode;
}

export const laborLaws: LaborLawItemType[] = [
  {
    id: "101",
    title: "Key Provisions of Labor Law §240 (The Scaffold Law)",
    content: (
      <div className="">
        <ul className="list-disc pl-4 sm:pl-6">
          <li className="text-base lg:text-lg text-text-muted">
            Requires proper scaffolding, hoists, stays, ladders, slings, and
            other devices for workers performing tasks at elevation
          </li>
          <li className="text-base lg:text-lg text-text-muted">
            Applies to building construction, demolition, repair, cleaning, and
            painting
          </li>
          <li className="text-base lg:text-lg text-text-muted">
            Holds owners and contractors strictly liable for injuries resulting
            from inadequate safety equipment
          </li>
          <li className="text-base lg:text-lg text-text-muted">
            Does not require the injured worker to prove negligence
          </li>
          <li className="text-base lg:text-lg text-text-muted">
            Comparative negligence is not a defense (except in cases of sole
            proximate cause)
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "102",
    title: " Labor Law §241(6)",
    content: (
      <div className="">
        <p className="text-base lg:text-lg text-text-muted">
          This section requires owners and contractors to provide reasonable and
          adequate protection and safety for workers and to comply with specific
          safety rules and regulations issued by the Commissioner of Labor.
          Unlike §240, claims under §241(6) require showing a violation of a
          specific Industrial Code provision.
        </p>
      </div>
    ),
  },
  {
    id: "103",
    title: " Wage and Hour Laws",
    content: (
      <div className="">
        <p className="text-base lg:text-lg text-text-muted mb-3">
          New York has some of the strongest wage and hour protections in the
          country:
        </p>
        <ul className="list-disc pl-4 sm:pl-6">
          <li className="text-base lg:text-lg text-text-base  ">
            <strong className="">Minimum Wage :</strong>{" "}
            <span className="text-text-muted ">
              As of 2023, $15.00 per hour in New York City, Long Island, and
              Westchester; $14.20 in the rest of the state
            </span>
          </li>
          <li className="text-base lg:text-lg">
            <strong className="text-text-base">Overtime :</strong>
            <span className="text-text-muted">
              1.5 times regular rate for hours worked beyond 40 in a workweek
              Spread of Hours: Extra hour of pay at minimum wage when workday
              exceeds 10 hours
            </span>
          </li>
          <li className="text-base lg:text-lg">
            <strong className="text-text-base">Pay Frequency :</strong>{" "}
            <span className="text-text-muted ">
              Manual workers must be paid weekly; clerical and other workers at
              least semi-monthly
            </span>
          </li>
          <li className="text-base lg:text-lg ">
            <strong className="text-text-base">
              Wage Theft Prevention Act :
            </strong>{" "}
            <span className="text-text-muted ">
              Requires detailed pay notices and imposes severe penalties for
              wage violations
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "104",
    title: " Employment Discrimination Laws",
    content: (
      <div className="">
        <p className="text-base lg:text-lg  text-text-base mb-3">
          New York State Human Rights Law (NYSHRL) and New York City Human
          Rights Law (NYCHRL) provide broader protections than federal law:
        </p>
        <ul className="list-disc pl-4 sm:pl-6">
          <li className="text-base lg:text-lg text-text-muted">
            Prohibit discrimination based on age, race, creed, color, national
            origin, sexual orientation, gender identity or expression, military
            status, sex, disability, predisposing genetic characteristics,
            familial status, marital status, and domestic violence victim status
          </li>
          <li className="text-base lg:text-lg text-text-muted ">
            Apply to employers with 4 or more employees (NYSHRL) or any number
            of employees (NYCHRL)
          </li>
          <li className="text-base lg:text-lg text-text-muted ">
            Require reasonable accommodations for disabilities, religious
            practices, pregnancy, and domestic violence victims
          </li>
          <li className="text-base lg:text-lg text-text-muted ">
            Prohibit inquiries about salary history
          </li>
          <li className="text-base lg:text-lg text-text-muted ">
            Restrict criminal background checks and credit checks
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "105",
    title: " Paid Family Leave",
    content: (
      <div className="">
        <p className="text-base lg:text-lg text-text-base mb-3">
          {` New York's Paid Family Leave (PFL) is one of the most comprehensive in
          the nation:`}
        </p>
        <ul className="list-disc pl-4 sm:pl-6">
          <li className="text-base lg:text-lg text-text-muted ">
            Provides up to 12 weeks of paid time off to bond with a new child,
            care for a family member with a serious health condition, or address
            certain military family needs
          </li>
          <li className="text-base lg:text-lg text-text-muted ">
            Pays 67% of average weekly wage, up to a cap
          </li>
          <li className="text-base lg:text-lg text-text-muted ">
            Job protection and continuation of health insurance
          </li>
          <li className="text-base lg:text-lg text-text-muted ">
            Available to full-time and part-time employees after 26 weeks of
            employment
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "106",
    title: " Sick Leave",
    content: (
      <div className="">
        <p className="text-base lg:text-lg text-text-base  mb-3">
          {`New York State's sick leave law requires employers to provide:`}
        </p>
        <ul className="list-disc pl-4 sm:pl-6">
          <li className="text-base lg:text-lg text-text-muted ">
            Employers with 4 or fewer employees and net income less than $1
            million: 40 hours of unpaid sick leave
          </li>
          <li className="text-base lg:text-lg text-text-muted ">
            Employers with 4 or fewer employees and net income of $1 million or
            more: 40 hours of paid sick leave
          </li>
          <li className="text-base lg:text-lg text-text-muted ">
            Employers with 5-99 employees: 40 hours of paid sick leave
          </li>
          <li className="text-base lg:text-lg text-text-muted ">
            Employers with 100+ employees: 56 hours of paid sick leave
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "107",
    title: " Recent Labor Law Changes",
    content: (
      <div className="">
        <p className="text-base lg:text-lg text-text-base mb-3">
          New York continues to expand worker protections with recent
          legislation addressing:
        </p>
        <ul className="list-disc pl-4 sm:pl-6">
          <li className="text-base lg:text-lg text-text-muted ">
            Workplace safety requirements during public health emergencies
          </li>
          <li className="text-base lg:text-lg text-text-muted ">
            Expanded whistleblower protections
          </li>
          <li className="text-base lg:text-lg text-text-muted ">
            Restrictions on non-compete and non-solicitation agreements
          </li>
          <li className="text-base lg:text-lg text-text-muted ">
            Pay transparency requirements Expanded anti-retaliation provisions
          </li>
        </ul>
      </div>
    ),
  },
];
