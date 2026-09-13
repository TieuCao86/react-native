// Hàm displayResult dùng để hiển thị thông tin Entity hoặc danh sách Entity
export function displayResult<T extends object>(
    title: string, 
    entity: T | T[]
): void {

    // In tiêu đề kết quả
    console.log(
        `\n================== ${title.toUpperCase()} ==================`
    );

    // Kiểm tra entity có phải là mảng hay không
    if (Array.isArray(entity)) {

        // In số lượng phần tử trong mảng
        console.log(`[Collection] Total: ${entity.length} items`);

        // Hiển thị dữ liệu dạng bảng
        console.table(entity);

        // Kết thúc hàm
        return;
    }

    // Lấy tên của class/object
    const entityName = entity.constructor.name !== "Object" 
        ? entity.constructor.name 
        : "Generic Entity";

    // In kiểu của Entity
    console.log(`[Entity Type]: ${entityName}`);
    console.log("---------------------------------------------");

    // Lấy tất cả thuộc tính của Entity
    const entries = Object.entries(entity);

    // Kiểm tra Entity có thuộc tính hay không
    if (entries.length === 0) {
        console.log("  (Empty Entity)");
    } else {

        // Duyệt qua từng thuộc tính
        for (const [key, value] of entries) {

            // Giá trị mặc định
            let formattedValue = value;

            // Nếu là Date thì chuyển sang dạng ngày giờ dễ đọc
            if (value instanceof Date) {
                formattedValue = value.toLocaleString();

            // Nếu là Object hoặc Array thì chuyển thành chuỗi JSON
            } else if (typeof value === "object" && value !== null) {
                formattedValue = JSON.stringify(value);
            }

            // In tên thuộc tính và giá trị
            console.log(
                `  * ${key.padEnd(15)}: ${formattedValue}`
            );
        }
    }

    // In dòng kết thúc
    console.log("=============================================");
}