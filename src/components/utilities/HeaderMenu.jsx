function HeaderMenu({ title }) {
  return (
    <div>
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-center text-color-primary">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default HeaderMenu;
