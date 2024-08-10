import Visimisi from "@/components/About/VisiMisi";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Teams from "@/components/Teams";
import { Metadata } from "next";
import { CardBlog } from "@/components/card";
import Wrapper from "@/components/wrapper";
import { getBlogs } from "@/lib/blog";
import { IBlogs } from "@/type/blog";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata: Metadata = {
  title: "Engineering Company",
  description: "Engineering Company",
  // other metadata
};

export default async function Home() {
  const blogs = await getBlogs()
  return (
    <>
      
      <ScrollUp />
      <Hero />
      <Features />
      <Visimisi />
      <Teams />
      <Wrapper>

      <section id="blog"
      className=" dark:bg-bg-color-dark">

      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />


      <div className="grid grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10">
        {
          blogs.map((items: IBlogs) => {
            return (
              <CardBlog 
                key={items.sys.id}
                title={items.fields.title} 
                slug={items.fields.slug} 
                image={items.fields.image.fields.file.url}
                avatar={items.fields.author.fields.avatar.fields.file.url}
                author={items.fields.author.fields.name}
                email={items.fields.author.fields.email}
              />
            )
          })
        }
      </div>
    </div>
      </section>
    </Wrapper>
      {/* <Blog /> */}
    </>
  );
}
