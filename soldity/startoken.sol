
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract starNFT is ERC721 {
    address public owner;
    uint256 public price;
    string  public baseuri = "https://ipfs.io/ipfs/QmRVMn7yqKfPBhZXpjQhKukYQ85EsKwk4xFsJDWGqjdmbi/";

    mapping(uint256 => string) private _tokenURIs;
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721URIStorage: URI query for nonexistent token");

        string memory _tokenURI = _tokenURIs[tokenId];
        string memory base = _baseURI();

        // If there is no base URI, return the token URI.
        if (bytes(base).length == 0) {
            return _tokenURI;
        }
        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        if (bytes(_tokenURI).length > 0) {
            return string(abi.encodePacked(base, _tokenURI));
        }

        return super.tokenURI(tokenId);
    }

    
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721URIStorage: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }


    constructor() ERC721 ("Star", "STAR"){
        owner = msg.sender;
    }
    
    function uintToString(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len;
        while (_i != 0) {
            k = k-1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }
    function setPrice(uint256 newprice) public{
        if(msg.sender != owner){
            revert("only owner function");
        }
        price = newprice;
    }
    function create_Star(uint16 starid) public payable{
        
        string memory uri = string(abi.encodePacked(baseuri,uintToString(starid),".json"));
        if(msg.value < price){
            revert("Not enough money sent");
        }
        if(starid > 466){
            revert("invalid star id");
        }
        _safeMint(msg.sender, starid);
        _setTokenURI(starid, uri);
        
        
        
    }
}