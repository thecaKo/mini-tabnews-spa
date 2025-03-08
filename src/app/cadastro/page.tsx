export default function Register() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center py-20 p-6 w-full max-w-3xl">
        <div className="flex flex-col items-center justify-center w-full space-y-6">
          <div className="flex justify-start w-full max-w-2xl ml-5">
            <h1 className="text-3xl font-bold text-gray-900">Cadastro</h1>
          </div>
          <form className="w-full bg-white p-8 rounded-lg py-2">
            <label htmlFor="username" className="block font-semibold text-xl font-medium text-gray-800 ml-1">
              Nome de usuário
            </label>
            <input
              id="username"
              type="text"
              placeholder="Escolha um nome de usuário"
              className="w-full p-2 px-5 h-10 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 mb-6"
              required
            />

            <label htmlFor="email" className="block font-semibold text-xl font-medium text-gray-800 ml-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full p-2 px-5 h-10 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 mb-6"
              required
            />

            <label htmlFor="password" className="block font-semibold text-xl font-medium text-gray-800 ml-1">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Crie uma senha"
              className="w-full p-2 px-5 h-10 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 mb-6"
              required
            />

            <div className="flex justify-end space-x-6 mt-6">
              <button
                type="submit"
                className="px-8 py-3 font-bold bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              >
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
