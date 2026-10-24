import Endpoint from "@/app/components/docs/EndpointDoc";
import Response from "@/app/components/docs/ResponseDoc";
import Snippet from "@/app/components/docs/SnippetDocs";
import FetchDoc from "@/app/components/docs/FetchDocs";
import InThisPage from "@/app/components/docs/InDocsPage";

const  Doc = () => {
  return (
    <div className="p-4 m-4 space-y-12">
      <h1 className="text-2xl font-bold mb-4">Hijri Date API documentation </h1>
      <div className="">
        <InThisPage />
      </div>
      <Endpoint />
      <Response />
      <Snippet />
      <FetchDoc />
    </div>
  );
}

export default Doc
