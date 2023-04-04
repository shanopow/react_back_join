import { useRef } from "react";
import useForm from "../../UseForm";

const FORM_ENDPOINT = "http://127.0.0.1:8000/api/degree/"; // TODO - fill on the later step

const ModuleForm = () => {
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
        <div>Something bad happened!</div>
        <div>{message}</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      ref={formElement}
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Code"
          name="code"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Full Name"
          name="full_name"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Delivered To"
          name="delivered_to"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Ca Split"
          name="ca_split"
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

export default ModuleForm;