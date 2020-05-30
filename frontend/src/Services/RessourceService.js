import { Path } from "../Resources/PathResource";

export class RessourceService {
    _Path = Path


    Path(selectedVariable) {
        return this._Path[selectedVariable]
    }
}