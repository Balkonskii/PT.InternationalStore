export class AbortControllerHelper {
    static createController(): AbortController {
        const controller = new AbortController();
        controller.abort.bind(controller);
        return controller;
    }
}
