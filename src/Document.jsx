const Page = () => {
  return (
    <div className="flex flex-col p-12 gap-4 border border-borderColor rounded-md bg-white text-black font-serif opacity-0">
      <h1 className="text-xl font-bold">Titolo pagina</h1>
      <h2 className="font-semibold text-lg">
        Sottotitolo pagina and some more random text please
      </h2>
      <p className="text-base leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        alias voluptates veniam delectus dolores corrupti! Sint amet facilis
        distinctio pariatur officia illum voluptatibus ex illo blanditiis neque
        ab, nobis in.
      </p>
      <p className="text-base leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        alias voluptates veniam delectus dolores corrupti! Sint amet facilis
        distinctio pariatur officia illum voluptatibus ex illo blanditiis neque
        ab, nobis in. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur alias voluptates veniam delectus dolores corrupti! Sint amet
        facilis distinctio pariatur officia illum voluptatibus ex illo
        blanditiis neque ab, nobis in.
      </p>
      <div className="h-[200px] w-[200px] bg-neutral-200" />
      <p className="text-base leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        alias voluptates veniam delectus dolores corrupti! Sint amet facilis
        distinctio pariatur officia illum voluptatibus ex illo blanditiis neque
        ab, nobis in. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur alias voluptates veniam delectus dolores corrupti! Sint amet
        facilis distinctio pariatur officia illum volupt Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Consectetur alias voluptates veniam
        delectus dolores corrupti! Sint amet facilis distinctio pariatur officia
        illum voluptatibus ex illo blanditiis neque ab, nobis in. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Consectetur alias
        voluptates veniam delectus dolores corrupti! Sint amet facilis
        distinctio pariatur officia illum voluptatur adipisicing elit.
        Consectetur alias rupti! Sint amet facilis distinctio pariatur officia
        illum voluptatibus ex illo blanditiis neque ab, nobis in.
      </p>
      <div className="h-[30vh] bg-neutral-200" />
      <p className="text-base leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        alias vue ab, nobis in. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur alias voluptates veniam delectus dolores
        corrupti! Sint amet facilis distinctio pariatur officia illum
        voluptatibus ex illo blanditiis neque ab, nobis in.
      </p>
      <p className="text-base leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        alias voluptates veniam delectus dolores corrupti! Sint amet facilis
        distinctio pariatur officia illum voluptatibus ex illo blanditiis neque
        ab, nobis in. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur alias voluptates veniam delectus dolores corrupti! Sint amet
        facilis distinctio pariatur officia illum voluptatibus ex illo
        blanditiis neque ab, nobis in.
      </p>
      <div className="text-xs flex justify-center">Pagina 1</div>
    </div>
  );
};

export default function Document() {
  return (
    <div className="flex flex-col gap-4">
      <Page />
      <Page />
      <Page />
      <Page />
      <Page />
    </div>
  );
}
