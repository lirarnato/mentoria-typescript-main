
declare var apiKey: string;
declare let requestToken: any;
declare let username: any;
declare let password: any;
declare let sessionId: any;
declare let listId: string;
declare let loginButton: HTMLElement | null;
declare let searchButton: HTMLElement | null;
declare let searchContainer: HTMLElement | null;
declare function preencherSenha(): void;
declare function preencherLogin(): void;
declare function preencherApi(): void;
declare function validateLoginButton(): void;
declare class HttpClient {
    static get({ url, method, body }: {
        url: any;
        method: any;
        body?: null | undefined;
    }): Promise<unknown>;
}
declare function procurarFilme(query: any): Promise<unknown>;
declare function adicionarFilme(filmeId: any): Promise<void>;
declare function criarRequestToken(): Promise<void>;
declare function logar(): Promise<void>;
declare function criarSessao(): Promise<void>;
declare function criarLista(nomeDaLista: any, descricao: any): Promise<void>;
declare function adicionarFilmeNaLista(filmeId: any, listaId: any): Promise<void>;
declare function pegarLista(): Promise<void>;