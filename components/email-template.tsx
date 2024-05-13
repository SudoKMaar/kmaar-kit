import * as React from "react";

interface ResourceSubmissionEmailProps {
  name: string;
  resourceName: string;
  resourceDescription: string;
  resourceUrl: string;
  resourceCategory: string;
  resourceCategory2: string;
  resourcePricing: string;
}

export const ResourceSubmissionEmail: React.FC<
  Readonly<ResourceSubmissionEmailProps>
> = ({
  name,
  resourceName,
  resourceDescription,
  resourceUrl,
  resourceCategory,
  resourceCategory2,
  resourcePricing,
}) => (
  <div>
    <h1>Hello, {name}!</h1>
    <p>
      Thank you for your submission to the KMaar Kit. Here are the details of
      the resource you submitted:
    </p>
    <ul>
      <li>
        <strong>Name:</strong> {resourceName}
      </li>
      <li>
        <strong>Description:</strong> {resourceDescription}
      </li>
      <li>
        <strong>URL:</strong> {resourceUrl}
      </li>
      <li>
        <strong>Category:</strong> {resourceCategory}
      </li>
      <li>
        <strong>Secondary Category:</strong> {resourceCategory2}
      </li>
      <li>
        <strong>Pricing:</strong> {resourcePricing}
      </li>
    </ul>
    <p>
      We will review your submission and notify you once it&apos;s live on our
      platform.
    </p>
    <p>Best,</p>
    <p>The KMaar Kit Team</p>
  </div>
);

export default ResourceSubmissionEmail;
