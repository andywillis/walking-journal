import { selectedUrl } from '../signals';

function useSelectedUrl(url) {
	selectedUrl.value = url;
}

export default useSelectedUrl;
