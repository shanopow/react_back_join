import { useRef } from "react";
import useForm from "../../UseForm";

const FORM_ENDPOINT = "http://127.0.0.1:8000/api/cohort/"; // TODO - fill on the later step

const CohortForm = () => {
  const formElement = useRef(null);
  const additionalData = {
    sent: new Date().toISOString(),
  };

  const { handleSubmit, status, message } = useForm({
    form: formElement.current,
    additionalData,
  });

  if (status === "success") {
    return (
      <>
        <div>Thank you!</div>
        <div>{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div>Error!</div>
        <div>{message}</div>
      </>
    );
  }

  return (
    <form data-theme="light"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      ref={formElement}
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Id"
          name="id"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Year"
          name="year"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Degree"
          name="degree"
          required
        />
      </div>
      {status !== "loading" && (
        <div className="mb-3 pt-0">
          <button type="submit">
            Submit
          </button>
        </div>
      )}
    </form>
  );
};

export default CohortForm;