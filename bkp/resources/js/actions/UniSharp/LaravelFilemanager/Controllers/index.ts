import LfmController from './LfmController'
import UploadController from './UploadController'
import ItemsController from './ItemsController'
import FolderController from './FolderController'
import CropController from './CropController'
import RenameController from './RenameController'
import ResizeController from './ResizeController'
import DownloadController from './DownloadController'
import DeleteController from './DeleteController'
import DemoController from './DemoController'
const Controllers = {
    LfmController: Object.assign(LfmController, LfmController),
UploadController: Object.assign(UploadController, UploadController),
ItemsController: Object.assign(ItemsController, ItemsController),
FolderController: Object.assign(FolderController, FolderController),
CropController: Object.assign(CropController, CropController),
RenameController: Object.assign(RenameController, RenameController),
ResizeController: Object.assign(ResizeController, ResizeController),
DownloadController: Object.assign(DownloadController, DownloadController),
DeleteController: Object.assign(DeleteController, DeleteController),
DemoController: Object.assign(DemoController, DemoController),
}

export default Controllers