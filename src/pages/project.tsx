import { useParams } from "react-router";
import { useProject } from "../api/use";
import Breadcrumb from "../context/breadcrumb";
import { useState } from "react";

export default function Projectone() {
  const { slug } = useParams<{ slug: string }>();
  const { project, loading, error } = useProject(slug ?? "");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!project) return <p>No project found.</p>;

  // Collect all images safely
  const images = [
    project.content?.image,
    project.content?.image1,
    project.content?.image2,
    project.content?.image3,
  ].filter(Boolean) as string[];

  // Default to main image if no selection
  const currentImage = selectedImage || project.content?.image;

  return (
    <>
      {/* ✅ SEO-friendly meta tags */}

      <title>{project.title}</title>
      <link
        rel="canonical"
        href={`https://asiannepalinterior.com/project/${project.slug}`}
      />

      {/* Breadcrumb */}
      <Breadcrumb
        title={project.title}
        links={[
          { name: "Projects", path: "/projects" },
          { name: project.title, path: `/project/${project.slug}` },
        ]}
      />

      <div className="container mb-8 space-y-6 mt-6">
        {/* Image Section */}
        <div>
          {currentImage && (
            <img
              src={currentImage}
              alt={`Photo of ${project.title}`}
              loading="lazy"
              className="h-auto w-full rounded-xl shadow"
            />
          )}

          {images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  alt={`Thumbnail ${i + 1} of ${project.title}`}
                  loading="lazy"
                  className={`h-20 w-20 cursor-pointer rounded border object-cover ${
                    currentImage === img ? "border-blue-500" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Info Section */}
        <div>
          <h1 className="mt-6 mb-2 text-3xl font-bold">{project.title}</h1>

          <div className="mb-6 space-y-4 text-gray-500">
            <p className="text-sm font-semibold">
              Location: <span>{project.content?.location}</span>
            </p>
            <p className=" text-sm font-semibold">
              Surface Area: <span>{project.content?.area}</span>
            </p>
            <p className="text-sm font-semibold">
              Year Completed: <span>{project.content?.year}</span>
            </p>
            <p className="text-sm font-semibold">
              Category: <span>{project.category}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Description / Specification Section */}
      <div className="container mb-8 space-y-6">
        {project.content?.description ? (
          <section
            className="prose prose-sm rounded-lg bg-gray-50 p-4"
            dangerouslySetInnerHTML={{
              __html: project.content.description,
            }}
          />
        ) : (
          <p className="text-sm text-gray-500 italic">
            No description available for this project.
          </p>
        )}
      </div>
    </>
  );
}
